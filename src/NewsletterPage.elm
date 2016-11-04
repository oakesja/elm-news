module NewsletterPage exposing (Model, Msg, init, view, update, onPageLoad)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Newsletter.Newsletter as Newsletter exposing (Newsletter, Article)
import News.Story exposing (Story)
import News.View
import Http
import Task
import Url
import Analytics exposing (Event)
import Components.Spinner


type alias Model =
    { newsletter : Content
    }


type Content
    = Fetching
    | Fetched Newsletter
    | Error Http.Error


init : Model
init =
    { newsletter = Fetching
    }


onPageLoad : String -> Cmd Msg
onPageLoad name =
    Task.perform
        FailedToFetchNewsletter
        FetchedNewsletter
        (Newsletter.fetch name)


type Msg
    = FailedToFetchNewsletter Http.Error
    | FetchedNewsletter Newsletter
    | ClickEvent Event


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FailedToFetchNewsletter error ->
            { model | newsletter = Error error } ! []

        FetchedNewsletter newsletter ->
            { model | newsletter = Fetched newsletter } ! []

        ClickEvent event ->
            model ! [ Analytics.registerEvent event ]


view : Int -> Model -> Html Msg
view screenWidth model =
    case model.newsletter of
        Fetching ->
            text "fetching"

        Error error ->
            text "error"

        Fetched newsletter ->
            displayNewsletter screenWidth newsletter


displayNewsletter : Int -> Newsletter -> Html Msg
displayNewsletter screenWidth newsletter =
    div []
        [ News.View.view
            { now = Nothing
            , screenWidth = screenWidth
            , stories = List.map articleToStory newsletter.articles
            , onLinkClick = ClickEvent
            }
        ]


articleToStory : Article -> Story
articleToStory article =
    { author = article.author
    , title = article.title
    , date = -1
    , url = article.url
    , tag = article.tag
    , domain = Url.parseDomain article.url
    }
