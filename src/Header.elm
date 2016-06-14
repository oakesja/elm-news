module Header exposing (view)

import Html exposing (Html, header)
import Html.Attributes exposing (class)
import Logo


view : Bool -> Html msg
view showHeader =
    let
        visibleClass =
            if showHeader then
                "header--visible"
            else
                "header--hidden"
    in
        header [ class <| "header " ++ visibleClass ]
            [ Logo.view ]
