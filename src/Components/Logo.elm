module Components.Logo exposing (..)

import Svg exposing (Svg, svg, path, g, text, text')
import Svg.Attributes exposing (fill, viewBox, d, height, transform, width, fontSize, x, y, class)
import Svg.Events exposing (onClick)


view : msg -> Svg msg
view clickMsg =
    svg
        [ height "40px"
        , viewBox "0 0 300 100"
        , class "logo"
        , onClick clickMsg
        ]
        [ icon
        , g
            [ transform "translate(140, 45)"
            , fill "#FFFFFF"
            , fontSize "3.0em"
            , class "header__control"
            ]
            [ text'
                []
                [ text "elm" ]
            , text'
                [ x "-10"
                , y "40"
                ]
                [ text "news" ]
            ]
        ]


icon : Svg msg
icon =
    g
        [ viewBox "0 0 100 100"
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
