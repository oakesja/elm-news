module Header exposing (view)

import Html exposing (Html, header, div, text)
import Html.Attributes exposing (class)


view : Bool -> Html msg
view showHeader =
    let
        visibleClass =
            if showHeader then
                "header--visible"
            else
                "header--hidden"
    in
        header [ class <| "header dark_blue " ++ visibleClass ]
            [ logo ]


logo : Html msg
logo =
    div [ class "logo" ]
        [ div [ class "logo_everything" ] [ text "everything" ]
        , div [ class "logo_elm" ] [ text "elm" ]
        ]
