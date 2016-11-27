module News.News
    exposing
        ( view
        , DisplayStory
        , DisplayStoryFrom(..)
        , Model
        , update
        , Msg
        , init
        )

import Date exposing (Date)
import Html exposing (Html, div, a, text, span)
import Html.Attributes exposing (class, classList, href, id)
import Html.Events exposing (onClick)
import Analytics exposing (Event, NewsEventInfo)
import News.Tag as Tag
import DateFormatter
import Url
import Navigation


type alias Model =
    {}


init : Model
init =
    {}


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


type Msg
    = ClickStory DisplayStory
    | TrackEvent Event


update : (NewsEventInfo -> Event) -> Msg -> Model -> ( Model, Cmd Msg )
update newsEvent msg model =
    case msg of
        ClickStory story ->
            model
                ! [ storyEvent story
                        |> newsEvent
                        |> Analytics.registerEvent
                  , Navigation.modifyUrl ("?storyId=" ++ storyId story)
                  ]

        TrackEvent event ->
            model ! [ Analytics.registerEvent event ]


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


storyId : DisplayStory -> String
storyId story =
    story.title ++ "_" ++ toString story.tag ++ "_" ++ (getAuthor story.from)


type alias Config =
    { now : Maybe Date
    , screenWidth : Int
    }


view : Model -> Config -> List DisplayStory -> Html Msg
view model config stories =
    stories
        |> List.sortBy storyDate
        |> List.reverse
        |> List.map (cardView config)
        |> div
            [ classList
                [ ( "cards_max", config.screenWidth >= 850 )
                , ( "cards_min", config.screenWidth < 850 )
                ]
            ]


storyDate : DisplayStory -> Float
storyDate story =
    Maybe.withDefault 0 story.date


cardView : Config -> DisplayStory -> Html Msg
cardView { now, screenWidth } story =
    if screenWidth < 650 then
        a
            [ class "card_min"
            , onClick (ClickStory story)
            , href story.url
            , id (storyId story)
            ]
            [ linkView story
            , div [ class "card__description__min" ]
                [ authorView story.from
                , timeStamp now story.date
                ]
            ]
    else
        div
            [ class "card"
            , id (storyId story)
            ]
            [ Tag.view story.tag TrackEvent
            , div [ class "card__description" ]
                [ linkView story
                , authorView story.from
                ]
            , timeStamp now story.date
            ]


linkView : DisplayStory -> Html Msg
linkView story =
    div [ class "card__description__header" ]
        [ a
            [ onClick (ClickStory story)
            , href story.url
            , class "card__description__title"
            ]
            [ text story.title ]
        , span [ class "card__description__domain" ]
            [ text <| "(" ++ (Url.domain story.url) ++ ")" ]
        ]


authorView : DisplayStoryFrom -> Html Msg
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


timeStamp : Maybe Date -> Maybe Float -> Html Msg
timeStamp now date =
    case date of
        Just d ->
            div [ class "card__date" ]
                [ text (DateFormatter.format now d)
                ]

        Nothing ->
            text ""
