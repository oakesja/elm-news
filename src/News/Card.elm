module News.Card exposing (view)

import Date exposing (Date)
import DateFormatter
import Html exposing (Html, div, a, text, span)
import Html.Attributes exposing (class, href)
import News.Story exposing (Story)
import News.Tag as Tag
import Analytics


view : Maybe Date -> Int -> Story -> Html Analytics.Msg
view now width story =
    let
        attrs =
            if width < 600 then
                [ Analytics.onLinkClick <|
                    Analytics.NewsLink story.tag story.url story.title
                , class "card card__link"
                ]
            else
                [ class "card" ]
    in
        card now story attrs


card : Maybe Date -> Story -> List (Html.Attribute Analytics.Msg) -> Html Analytics.Msg
card now story attrs =
    div attrs
        [ Tag.view story.tag
        , div [ class "card__description" ]
            [ linkView story
            , authorView story.author
            ]
        , timeStamp now story.date
        ]


linkView : Story -> Html Analytics.Msg
linkView { url, title, domain, tag } =
    div [ class "card__description__header" ]
        [ a
            [ Analytics.onLinkClick <|
                Analytics.NewsLink tag url title
            , href url
            , class "card__description__title"
            ]
            [ text title ]
        , span [ class "card__description__domain" ]
            [ text <| "(" ++ domain ++ ")" ]
        ]


authorView : String -> Html msg
authorView author =
    div [ class "card__author" ]
        [ text <| "By " ++ author ]


timeStamp : Maybe Date -> Float -> Html msg
timeStamp now date =
    div [ class "card__date" ]
        [ text <| DateFormatter.format now <| Date.fromTime date ]
