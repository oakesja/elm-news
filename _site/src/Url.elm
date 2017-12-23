module Url exposing (domain)

import Erl
import String


domain : String -> String
domain url =
    Erl.parse url
        |> .host
        |> String.join "."
