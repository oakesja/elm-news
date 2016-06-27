module News.Manager
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
import Task
import Basics.Extra exposing (never)
import News.Story exposing (..)
import News.Fetcher as Fetcher
import News.Card as Card
import Components.Spinner as Spinner
import Analytics


type alias Model =
    { allStories : List Story
    }


init : ( Model, Cmd InternalMsg )
init =
    let
        model =
            { allStories = []
            }
    in
        ( model, Fetcher.cmd FetchSuccess FetchError )


subscriptions : Sub InternalMsg
subscriptions =
    Fetcher.subscriptions FetchSuccess FetchError


type InternalMsg
    = FetchSuccess StoryResp
    | FetchError StoryError


type OutMsg
    = Error String


type Msg
    = ForSelf InternalMsg
    | ForParent OutMsg


type alias MsgTranslator msg =
    { onInternalMessage : InternalMsg -> msg
    , onError : String -> msg
    }


type alias Translator parentMsg =
    Msg -> parentMsg


translateMsg : MsgTranslator parentMsg -> Translator parentMsg
translateMsg { onInternalMessage, onError } msg =
    case msg of
        ForSelf internal ->
            onInternalMessage internal

        ForParent (Error error) ->
            onError error


update : InternalMsg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchSuccess resp ->
            ( { model | allStories = model.allStories ++ resp.stories }
            , Cmd.none
            )

        FetchError rawError ->
            let
                _ =
                    Debug.log "" rawError.error

                error =
                    "Failed to fetch content from " ++ rawError.tag
            in
                ( model
                , Task.perform never ForParent <| Task.succeed <| Error error
                )


view : Maybe Date -> Int -> Model -> Html Analytics.Msg
view now width model =
    let
        cards =
            if False then
                Spinner.view
            else
                div [ class "cards" ]
                    <| List.map (Card.view now width)
                    <| List.reverse
                    <| List.sortBy .date model.allStories
    in
        div [ class "body" ]
            [ cards ]
