module NewsletterPage exposing (Model, Msg, init, view, update)

import Html exposing (Html, div, text, h1)
import Html.Attributes exposing (class)
import Newsletter.Newsletter as Newsletter exposing (Newsletter, Article)
import Newsletter.NewsletterFile exposing (NewsletterFile)
import News.News as News exposing (DisplayStory)
import Analytics exposing (Event)
import Components.Icons
import Navigation
import Links
import FetchData exposing (FetchData)


type alias Model =
    { news : News.Model
    , filename : String
    }


init : String -> ( Model, Cmd Msg )
init filename =
    { news = News.init
    , filename = filename
    }
        ! []


type Msg
    = ClickEvent Event
    | GoToArticle String
    | NewsMsg News.Msg
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

        NewsMsg newsMsg ->
            let
                ( newNews, cmd ) =
                    News.update
                        { newsEvent = Analytics.archivedNewsLink
                        , redirectToId = False
                        }
                        newsMsg
                        model.news
            in
                { model | news = newNews } ! [ Cmd.map NewsMsg cmd ]

        NoOp ->
            model ! []


type alias Data =
    { screenWidth : Int
    , files : List NewsletterFile
    , newsletter : FetchData Newsletter
    }


view : Data -> Model -> Html Msg
view data model =
    FetchData.view
        (displayNewsletter data.screenWidth data.files model)
        data.newsletter


displayNewsletter : Int -> List NewsletterFile -> Model -> Newsletter -> Html Msg
displayNewsletter screenWidth files model newsletter =
    div [ class "newsletter__body" ]
        [ articles screenWidth files newsletter model
        , div [ class "newsletter__controls" ]
            [ navIcon previousArticle Components.Icons.left files model.filename "newsletter__nav_min"
            , navIcon nextArticle Components.Icons.right files model.filename "newsletter__nav_min"
            ]
        ]


articles : Int -> List NewsletterFile -> Newsletter -> Model -> Html Msg
articles screenWidth files newsletter model =
    div [ class "newsletter__articles" ]
        [ h1 [ class "newsletter__header" ] [ text (title newsletter) ]
        , News.view
            model.news
            { now = Nothing
            , screenWidth = screenWidth
            }
            (List.map toDisplayStory newsletter.articles)
            |> Html.map NewsMsg
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
