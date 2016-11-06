module News.View exposing (view, DisplayStory, DisplayStoryFrom(..))

import Date exposing (Date)
import Html exposing (Html, div, a, text, span)
import Html.Attributes exposing (class, href, id)
import Html.Events exposing (onClick)
import Analytics exposing (Event, NewsEventInfo)
import News.Tag as Tag
import DateFormatter
import Erl
import String


type alias Config msg =
    { now : Maybe Date
    , screenWidth : Int
    , onLinkClick : Event -> msg
    }


type DisplayStoryFrom
    = Author String
    | Other String


type alias DisplayStory =
    { from : DisplayStoryFrom
    , title : String
    , date : Maybe Float
    , url : String
    , tag : String
    }


view : Config msg -> List DisplayStory -> Html msg
view config stories =
    stories
        |> List.sortBy storyDate
        |> List.reverse
        |> List.map (cardView config)
        |> div [ class "cards" ]


storyDate : DisplayStory -> Float
storyDate story =
    Maybe.withDefault 0 story.date


cardView : Config msg -> DisplayStory -> Html msg
cardView { now, screenWidth, onLinkClick } story =
    let
        attrs =
            if screenWidth < 600 then
                [ storyEvent story
                    |> Analytics.newsLink
                    |> onLinkClick
                    |> onClick
                , class "card card__link"
                ]
            else
                [ class "card" ]
    in
        div attrs
            [ Tag.view story.tag onLinkClick
            , div [ class "card__description" ]
                [ linkView story onLinkClick
                , authorView story.from
                ]
            , timeStamp now story.date
            ]


linkView : DisplayStory -> (Event -> msg) -> Html msg
linkView story onLinkClick =
    div [ class "card__description__header" ]
        [ a
            [ storyEvent story
                |> Analytics.newsLink
                |> onLinkClick
                |> onClick
            , href story.url
            , class "card__description__title"
            ]
            [ text story.title ]
        , span [ class "card__description__domain" ]
            [ text <| "(" ++ (parseDomain story.url) ++ ")" ]
        ]


parseDomain : String -> String
parseDomain url =
    Erl.parse url
        |> .host
        |> String.join "."


storyEvent : DisplayStory -> NewsEventInfo
storyEvent story =
    { tag = story.tag
    , url = story.url
    , title = story.title
    , author = getAuthor story.from
    }


getAuthor : DisplayStoryFrom -> String
getAuthor from =
    case from of
        Author a ->
            a

        Other o ->
            o


authorView : DisplayStoryFrom -> Html msg
authorView from =
    let
        fromText =
            case from of
                Author a ->
                    "By " ++ a

                Other o ->
                    o
    in
        div [ class "card__author" ]
            [ text fromText ]


timeStamp : Maybe Date -> Maybe Float -> Html msg
timeStamp now date =
    case date of
        Just d ->
            div [ class "card__date" ]
                [ text (DateFormatter.format now d)
                ]

        Nothing ->
            text ""
