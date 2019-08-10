port module HomePage
    exposing
        ( Model
        , Msg
        , init
        , subscriptions
        , update
        , view
        )

import Analytics
import Components.Spinner
import Date exposing (Date)
import ErrorManager
import Html exposing (Html, a, div, h1, span, text)
import Html.Attributes exposing (class)
import Http
import List
import News.Feed as Feed
import News.HackerNews as HackerNews
import News.News as News exposing (DisplayStory)
import News.Reddit as Reddit
import News.Story exposing (Story, StoryError, StoryResp)
import Task exposing (Task, andThen)


type alias Model =
    { allStories : List Story
    , errorManager : ErrorManager.Model
    , news : News.Model
    , remainingPlacesToFetchFrom : List String
    }


init : ( Model, Cmd Msg )
init =
    { errorManager = ErrorManager.init
    , allStories = []
    , news = News.init
    , remainingPlacesToFetchFrom = [ Feed.elmDiscourse, Reddit.tag, HackerNews.tag ]
    }
        ! [  fetchGoogleGroupMsgs Feed.elmDiscourse
          , fetch Reddit.tag Reddit.fetch
          , fetch HackerNews.tag HackerNews.fetch
          ]


fetch : String -> Http.Request (List Story) -> Cmd Msg
fetch tag request =
    Task.attempt
        (\result -> FetchedNews tag (Result.mapError toString result))
        (Http.toTask request)


type Msg
    = ErrorManagerMessage ErrorManager.Msg
    | AnalyticsEvent Analytics.Event
    | FetchedNews String (Result String (List Story))
    | NewsMsg News.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ErrorManagerMessage errorMsg ->
            updateErrorManager errorMsg model

        AnalyticsEvent event ->
            model ! [ Analytics.registerEvent event ]

        FetchedNews tag (Ok stories) ->
            let
                updatedModel =
                    updateRemainingToFetch tag
                        { model | allStories = model.allStories ++ stories }
            in
            updatedModel ! []

        FetchedNews tag (Err rawError) ->
            let
                error =
                    { display = "Failed to fetch content from " ++ tag
                    , raw = Debug.log "" rawError
                    }

                ( updatedWithError, errorCmd ) =
                    updateErrorManager (ErrorManager.AddError error) model

                updatedModel =
                    updateRemainingToFetch tag updatedWithError
            in
            updatedModel
                ! [ errorCmd ]

        NewsMsg newsMsg ->
            let
                ( newNews, cmd ) =
                    News.update
                        { newsEvent = Analytics.newsLink
                        }
                        newsMsg
                        model.news
            in
            { model | news = newNews } ! [ Cmd.map NewsMsg cmd ]


updateRemainingToFetch : String -> Model -> Model
updateRemainingToFetch tag model =
    { model
        | remainingPlacesToFetchFrom =
            model.remainingPlacesToFetchFrom
                |> List.filter (\t -> t /= tag)
    }


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
    let
        news =
            if List.isEmpty model.allStories then
                Components.Spinner.view
            else
                News.view
                    model.news
                    { now = now
                    , screenWidth = screenWidth
                    }
                    (List.map toDisplayStory model.allStories)
                    |> Html.map NewsMsg
    in
    div [ class "home__body" ]
        [ news
        , ErrorManager.view model.errorManager
            |> Html.map ErrorManagerMessage
        ]


toDisplayStory : Story -> DisplayStory
toDisplayStory story =
    { from = News.Author story.author
    , title = story.title
    , date = Just story.date
    , url = story.url
    , tag = story.tag
    }


subscriptions : Sub Msg
subscriptions =
    Sub.batch
        [ fetchedGoogleGroupMsgs (\resp -> FetchedNews resp.tag (Ok resp.stories))
        , errorGoogleGroupMsgs (\resp -> FetchedNews resp.tag (Err resp.error))
        ]


port scrollIntoView : String -> Cmd msg


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (StoryResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (StoryError -> msg) -> Sub msg
