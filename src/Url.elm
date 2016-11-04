module Url exposing (parseDomain)

import Erl
import String


parseDomain : String -> String
parseDomain url =
    Erl.parse url
        |> .host
        |> String.join "."
