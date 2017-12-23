module HtmlEvents exposing (onEnter)

import Html.Events exposing (on, keyCode)
import Html
import Json.Decode as Json


onEnter : msg -> Html.Attribute msg
onEnter onEnterAction =
    on "keyup" <|
        Json.andThen
            (\keyCode ->
                if keyCode == 13 then
                    Json.succeed onEnterAction
                else
                    Json.fail (toString keyCode)
            )
            keyCode
