module Components.Icons exposing (left, right)

import Html exposing (a)
import Svg exposing (Svg, path, svg)
import Svg.Attributes exposing (class, viewBox, height, fill, d)
import Svg.Events exposing (onClick)


left : String -> Int -> msg -> Svg msg
left =
    icon "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"


right : String -> Int -> msg -> Svg msg
right =
    icon "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"


icon : String -> String -> Int -> msg -> Svg msg
icon pathString className h onClickMsg =
    a [ onClick onClickMsg ]
        [ svg
            [ class className
            , viewBox "0 0 24 24"
            , height (toString h)
            , fill "currentColor"
            , onClick onClickMsg
            ]
            [ path [ d pathString ] []
            ]
        ]
