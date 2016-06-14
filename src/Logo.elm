module Logo exposing (..)

import Svg exposing (Svg, svg, path)
import Svg.Attributes exposing (fill, viewBox, d, height)
import Html exposing (Html, div, text)
import Html.Attributes


view : Html msg
view =
    div [ Html.Attributes.class "logo" ]
        [ icon
        , div [ Html.Attributes.class "logo__text" ]
            [ div [ Html.Attributes.class "logo_elm" ] [ text "elm" ]
            , div [ Html.Attributes.class "logo_news" ] [ text "news" ]
            ]
        ]


icon : Svg msg
icon =
    svg
        [ height "40px"
        , viewBox "0 0 100 100"
        , Svg.Attributes.class "logo__icon"
        ]
        [ path
            [ d "M 5 0 L 95 0 L 50 55 z"
            , fill "#F0AD00"
            ]
            []
        , path
            [ d "M 0 5 L 0 95 L 36.8 50 z"
            , fill "#60B5CC"
            ]
            []
        , path
            [ d "M 100 5 L 100 95 L 63.2 50 z"
            , fill "#60B5CC"
            ]
            []
        , path
            [ d "M 5 100 L 41.36 55.55 L 50 66.11 L 58.64 55.55 L 95 100 z"
            , fill "#7FD13B"
            ]
            []
        ]
