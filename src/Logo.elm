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
        , viewBox "0 0 150 100"
        , Svg.Attributes.class "logo__icon"
        ]
        [ path
            [ d "M 5 0 L 145 0 L 75 60 z"
            , fill "#F0AD00"
            ]
            []
        , path
            [ d "M 0 5 L 0 95 L 52.5 50 z"
            , fill "#60B5CC"
            ]
            []
        , path
            [ d "M 150 5 L 150 95 L 97.5 50 z"
            , fill "#60B5CC"
            ]
            []
        , path
            [ d "M 5 100 L 57.9 54.6 L 75 69.3 L 92.1 54.6 L 145 100 z"
            , fill "#7FD13B"
            ]
            []
        ]
