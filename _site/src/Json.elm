module Json exposing (result)

import Json.Decode exposing (..)


result : Decoder (Result String a) -> Decoder a
result =
    andThen <|
        \result ->
            case result of
                Ok r ->
                    succeed r

                Err err ->
                    fail err
