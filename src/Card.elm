module Card exposing (view)

import Date exposing (Date)
import DateFormatter
import Html exposing (Html, div, a, text, span)
import Html.Attributes exposing (class, href)
import NewsLink exposing (NewsLink)
import Tag
import Analytics


view : Maybe Date -> Int -> NewsLink -> Html Analytics.Msg
view now width newsLink =
    let
        attrs =
            if width < 600 then
                [ Analytics.onLinkClick
                    <| Analytics.NewsLink newsLink.tag newsLink.link
                , class "card card__link"
                ]
            else
                [ class "card" ]
    in
        card now newsLink attrs


card : Maybe Date -> NewsLink -> List (Html.Attribute Analytics.Msg) -> Html Analytics.Msg
card now newsLink attrs =
    div attrs
        [ Tag.view newsLink.tag
        , div [ class "card__description" ]
            [ linkView newsLink
            , authorView newsLink.author
            ]
        , timeStamp now newsLink.date
        ]


linkView : NewsLink -> Html Analytics.Msg
linkView { link, title, domain, tag } =
    div [ class "card__description__header" ]
        [ a
            [ Analytics.onLinkClick
                <| Analytics.NewsLink tag link
            , href link
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
