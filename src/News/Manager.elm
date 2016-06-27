port module News.Manager
    exposing
        ( Model
        , init
        , subscriptions
        , Translator
        , InternalMsg
        , translateMsg
        , update
        , view
        )

import Date exposing (Date)
import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Html.App
import Task
import Basics.Extra exposing (never)
import News.Story exposing (..)
import News.Fetcher as Fetcher
import News.Card as Card
import News.PaginationButtons as PaginationButtons
import Components.Spinner as Spinner
import Analytics


type alias Stories =
    List StoryResp


type alias Model =
    { stories : Stories
    , noErrors : Bool
    , page : Int
    }


init : ( Model, Cmd InternalMsg )
init =
    ( { stories = []
      , noErrors = True
      , page = 0
      }
    , Fetcher.cmd FetchSuccess FetchError
    )


subscriptions : Sub InternalMsg
subscriptions =
    Fetcher.subscriptions FetchSuccess FetchError


type InternalMsg
    = FetchSuccess StoryResp
    | FetchError StoryError
    | NextPage
    | PreviousPage
    | FirstPage
    | NoOp


type OutMsg
    = Error String
    | Analytics Analytics.Msg


type Msg
    = ForSelf InternalMsg
    | ForParent OutMsg


type alias MsgTranslator msg =
    { onInternalMessage : InternalMsg -> msg
    , onError : String -> msg
    , onAnalytics : Analytics.Msg -> msg
    }


type alias Translator parentMsg =
    Msg -> parentMsg


translateMsg : MsgTranslator parentMsg -> Translator parentMsg
translateMsg { onInternalMessage, onError, onAnalytics } msg =
    case msg of
        ForSelf internal ->
            onInternalMessage internal

        ForParent (Error error) ->
            onError error

        ForParent (Analytics analytisMsg) ->
            onAnalytics analytisMsg


update : InternalMsg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchSuccess resp ->
            ( { model | stories = resp :: model.stories }
            , Cmd.none
            )

        FetchError rawError ->
            let
                _ =
                    Debug.log "" rawError.error

                error =
                    "Failed to fetch content from " ++ rawError.tag
            in
                ( { model | noErrors = False }
                , Task.perform never ForParent <| Task.succeed <| Error error
                )

        NextPage ->
            ( { model | page = model.page + 1 }, scrollToTop True )

        PreviousPage ->
            ( { model | page = model.page - 1 }, scrollToTop True )

        FirstPage ->
            ( { model | page = 0 }, scrollToTop True )

        NoOp ->
            ( model, Cmd.none )


view : Maybe Date -> Int -> Model -> Html Msg
view now width model =
    let
        body =
            if noStories model && model.noErrors then
                [ Spinner.view ]
            else
                createBody now width model
    in
        div [ class "body" ]
            body


createBody : Maybe Date -> Int -> Model -> List (Html Msg)
createBody now width model =
    let
        stories =
            allStories model
    in
        [ Html.App.map (ForParent << Analytics)
            <| div [ class "cards" ]
            <| List.map (Card.view now width)
            <| takePage model.page 25
            <| sortByDate stories
        , Html.App.map ForSelf
            <| PaginationButtons.view
                { onNextPage = NextPage
                , onPreviousPage = PreviousPage
                , onFirstPage = FirstPage
                , noOp = NoOp
                , currentPage = model.page
                , morePages = (model.page + 1) * 25 < List.length stories
                }
        ]


noStories : Model -> Bool
noStories model =
    List.isEmpty <| allStories model


allStories : Model -> List Story
allStories model =
    List.foldl (\resp all -> all ++ resp.stories) [] model.stories


sortByDate : List Story -> List Story
sortByDate =
    List.reverse << (List.sortBy .date)


takePage : Int -> Int -> List Story -> List Story
takePage pageNum numPerPage stories =
    List.drop (pageNum * numPerPage) stories
        |> List.take numPerPage


port scrollToTop : Bool -> Cmd msg
