module Card exposing (view)

import Date exposing (Date)
import DateFormatter
import Html exposing (Html, div, a, text, span)
import Html.Attributes exposing (class, href)
import ContentLink exposing (ContentLink)
import Tag


view : Maybe Date -> Int -> ContentLink -> Html msg
view now width content =
    if width < 600 then
        a
            [ href content.link
            , class "card__link"
            ]
            [ card now content ]
    else
        card now content


card : Maybe Date -> ContentLink -> Html msg
card now content =
    div [ class "card" ]
        [ Tag.view content.tag
        , div [ class "card__description" ]
            [ div [ class "card__description__header" ]
                [ a
                    [ href content.link
                    , class "card__description__title"
                    ]
                    [ text content.title ]
                , span [ class "card__description__domain" ]
                    [ text <| "(" ++ content.domain ++ ")" ]
                ]
            , div [ class "card__author" ]
                [ text <| "By " ++ content.author ]
            ]
        , div [ class "card__date" ]
            [ text <| DateFormatter.format now <| Date.fromTime content.date ]
        ]
