module NewsletterPage exposing (Model, Msg, init, view, update, onPageLoad)

import Html exposing (Html, div, text, h1)
import Html.Attributes exposing (class)
import Newsletter.Newsletter as Newsletter exposing (Newsletter, Article)
import Newsletter.NewsletterFile exposing (NewsletterFile)
import News.Story exposing (Story)
import News.View
import Http
import Task
import Url
import Analytics exposing (Event)
import Components.Icons
import Navigation
import Links


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
    | GoToArticle String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FailedToFetchNewsletter error ->
            { model | newsletter = Error error } ! []

        FetchedNewsletter newsletter ->
            { model | newsletter = Fetched newsletter } ! []

        ClickEvent event ->
            model ! [ Analytics.registerEvent event ]

        GoToArticle name ->
            model
                ! [ Links.newsletter name
                        |> Navigation.newUrl
                  ]


view : Int -> List NewsletterFile -> String -> Model -> Html Msg
view screenWidth files filename model =
    case model.newsletter of
        Fetching ->
            text "fetching"

        Error error ->
            text "error"

        Fetched newsletter ->
            displayNewsletter screenWidth files filename newsletter


displayNewsletter : Int -> List NewsletterFile -> String -> Newsletter -> Html Msg
displayNewsletter screenWidth files filename newsletter =
    div [ class "newsletter__body" ]
        [ h1 [ class "newsletter__header" ] [ text (title newsletter) ]
        , articles screenWidth files filename newsletter
        ]


title : Newsletter -> String
title newsletter =
    "Top News for "
        ++ newsletter.startDate
        ++ " - "
        ++ newsletter.endDate
        ++ ", "
        ++ newsletter.year


articles : Int -> List NewsletterFile -> String -> Newsletter -> Html Msg
articles screenWidth files filename newsletter =
    div [ class "newsletter__articles" ]
        [ navIcon previousArticle Components.Icons.left files filename
        , News.View.view
            { now = Nothing
            , screenWidth = screenWidth
            , stories = List.map articleToStory newsletter.articles
            , onLinkClick = ClickEvent
            }
        , navIcon nextArticle Components.Icons.right files filename
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


navIcon :
    (String -> List NewsletterFile -> Maybe NewsletterFile)
    -> (String -> Int -> Msg -> Html Msg)
    -> List NewsletterFile
    -> String
    -> Html Msg
navIcon findArticle icon files filename =
    case findArticle filename files of
        Just file ->
            icon "newsletter__nav" 48 (GoToArticle file.name)

        Nothing ->
            text ""


previousArticle : String -> List NewsletterFile -> Maybe NewsletterFile
previousArticle name files =
    case files of
        [] ->
            Nothing

        x :: [] ->
            Nothing

        x :: y :: z ->
            if y.name == name then
                Just x
            else
                previousArticle name (y :: z)


nextArticle : String -> List NewsletterFile -> Maybe NewsletterFile
nextArticle name files =
    case files of
        [] ->
            Nothing

        x :: [] ->
            Nothing

        x :: y :: z ->
            if x.name == name then
                Just y
            else
                nextArticle name (y :: z)
