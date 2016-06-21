module Close exposing (view)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)


view : Html ()
view =
    div
        [ class "close"
        , onClick ()
        ]
        [ text "✖" ]
