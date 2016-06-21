module ErrorToast exposing (view)

import Html exposing (Html, div, text, img)
import Html.Attributes exposing (class, src, alt, style)
import Close


view : String -> Int -> Html ()
view error top =
    div
        [ class "error"
        , style [ ( "top", (toString top) ++ "px" ) ]
        ]
        [ div [ class "error__content" ]
            [ img
                [ src "assets/images/error.svg"
                , alt "Error"
                , class "error__img"
                ]
                []
            , div [ class "error__text" ]
                [ text error ]
            ]
        , Close.view
        ]
