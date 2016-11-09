module NewsletterPage exposing (Model, Msg, init, view, update, onPageLoad)

import Html exposing (Html, div, text, h1)
import Html.Attributes exposing (class)
import Newsletter.Newsletter as Newsletter exposing (Newsletter, Article)
import Newsletter.NewsletterFile exposing (NewsletterFile)
import News.View as News exposing (DisplayStory)
import Analytics exposing (Event)
import Components.Icons
import Navigation
import Links
import FetchData exposing (FetchData)


type alias Model =
    {}


init : Model
init =
    {}


onPageLoad : String -> Cmd Msg
onPageLoad name =
    Cmd.none


type Msg
    = ClickEvent Event
    | GoToArticle String
    | NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ClickEvent event ->
            model ! [ Analytics.registerEvent event ]

        GoToArticle name ->
            model
                ! [ Links.newsletter name
                        |> Navigation.newUrl
                  ]

        NoOp ->
            model ! []


type alias Data =
    { screenWidth : Int
    , files : List NewsletterFile
    , filename : String
    , newsletter : FetchData Newsletter
    }


view : Data -> Model -> Html Msg
view data model =
    case data.newsletter of
        FetchData.Fetching ->
            text "fetching"

        FetchData.Failed error ->
            text "error"

        FetchData.Fetched newsletter ->
            displayNewsletter data.screenWidth data.files data.filename newsletter

        FetchData.NotStarted ->
            text "not started"


displayNewsletter : Int -> List NewsletterFile -> String -> Newsletter -> Html Msg
displayNewsletter screenWidth files filename newsletter =
    if screenWidth >= 600 then
        div [ class "newsletter__body" ]
            [ navIcon previousArticle Components.Icons.left files filename "newsletter__nav"
            , articles screenWidth files filename newsletter
            , navIcon nextArticle Components.Icons.right files filename "newsletter__nav"
            ]
    else
        div [ class "newsletter__body_min" ]
            [ articles screenWidth files filename newsletter
            , div [ class "newsletter__controls" ]
                [ navIcon previousArticle Components.Icons.left files filename "newsletter__nav_min"
                , navIcon nextArticle Components.Icons.right files filename "newsletter__nav_min"
                ]
            ]


articles : Int -> List NewsletterFile -> String -> Newsletter -> Html Msg
articles screenWidth files filename newsletter =
    div [ class "newsletter__articles" ]
        [ h1 [ class "newsletter__header" ] [ text (title newsletter) ]
        , News.view
            { now = Nothing
            , screenWidth = screenWidth
            , onLinkClick = ClickEvent
            }
            (List.map toDisplayStory newsletter.articles)
        ]


title : Newsletter -> String
title newsletter =
    "Top News for "
        ++ newsletter.startDate
        ++ " - "
        ++ newsletter.endDate
        ++ ", "
        ++ newsletter.year


toDisplayStory : Article -> DisplayStory
toDisplayStory article =
    { from = article.from
    , title = article.title
    , date = Nothing
    , url = article.url
    , tag = article.tag
    }


navIcon :
    (String -> List NewsletterFile -> Maybe NewsletterFile)
    -> (String -> Int -> Msg -> Html Msg)
    -> List NewsletterFile
    -> String
    -> String
    -> Html Msg
navIcon findArticle icon files filename baseClass =
    case findArticle filename files of
        Just file ->
            icon baseClass 48 (GoToArticle file.name)

        Nothing ->
            icon "newsletter__nav_disabled" 48 NoOp


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
