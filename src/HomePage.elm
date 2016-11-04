port module HomePage
    exposing
        ( Model
        , init
        , Msg
        , update
        , view
        , subscriptions
        , onPageLoad
        )

import Html exposing (Html, a, text, div, h1, span)
import Html.Attributes exposing (class)
import Html.App
import Date exposing (Date)
import Task exposing (Task, andThen)
import ErrorManager
import News.Story exposing (Story, StoryResp, StoryError)
import News.View as News
import News.Reddit as Reddit
import News.HackerNews as HackerNews
import Analytics
import Http


type alias Model =
    { allStories : List Story
    , errorManager : ErrorManager.Model
    }


init : Model
init =
    { errorManager = ErrorManager.init
    , allStories = []
    }


onPageLoad : Cmd Msg
onPageLoad =
    Cmd.batch
        [ fetchGoogleGroupMsgs "elm-dev"
        , fetchGoogleGroupMsgs "elm-discuss"
        , fetch Reddit.tag Reddit.fetch
        , fetch HackerNews.tag HackerNews.fetch
        ]


fetch : String -> Task Http.Error (List Story) -> Cmd Msg
fetch tag task =
    Task.perform
        (\error ->
            toString error
                |> StoryError tag
                |> NewsFetchError
        )
        (\links -> NewsFetchSuccess (StoryResp tag links))
        task


type Msg
    = ErrorManagerMessage ErrorManager.Msg
    | AnalyticsEvent Analytics.Event
    | NewsFetchSuccess StoryResp
    | NewsFetchError StoryError


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ErrorManagerMessage errorMsg ->
            updateErrorManager errorMsg model

        AnalyticsEvent event ->
            ( model, Analytics.registerEvent event )

        NewsFetchSuccess resp ->
            ( { model | allStories = model.allStories ++ resp.stories }
            , Cmd.none
            )

        NewsFetchError rawError ->
            let
                error =
                    { display = "Failed to fetch content from " ++ rawError.tag
                    , raw = Debug.log "" rawError.error
                    }
            in
                updateErrorManager (ErrorManager.AddError error) model


updateErrorManager : ErrorManager.Msg -> Model -> ( Model, Cmd Msg )
updateErrorManager msg model =
    let
        ( newErrorMang, fx ) =
            ErrorManager.update msg model.errorManager
    in
        ( { model | errorManager = newErrorMang }
        , Cmd.map ErrorManagerMessage fx
        )


view : Maybe Date -> Int -> Model -> Html Msg
view now screenWidth model =
    div [ class "home__body" ]
        [ News.view
            { now = now
            , screenWidth = screenWidth
            , stories = model.allStories
            , onLinkClick = AnalyticsEvent
            }
        , ErrorManager.view model.errorManager
            |> Html.App.map ErrorManagerMessage
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ fetchedGoogleGroupMsgs NewsFetchSuccess
        , errorGoogleGroupMsgs NewsFetchError
        ]


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (StoryResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (StoryError -> msg) -> Sub msg
