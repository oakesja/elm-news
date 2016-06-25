module Reddit exposing (fetch, tag)

import Json.Decode exposing (..)
import Task exposing (Task)
import Http
import String
import NewsLink exposing (NewsLink)


tag : String
tag =
    "reddit"


fetch : Task Http.Error (List NewsLink)
fetch =
    Http.get decoder "https://www.reddit.com/r/elm/new/.json"


decoder : Decoder (List NewsLink)
decoder =
    object6 NewsLink
        ("author" := string)
        ("title" := string)
        ("created_utc" := timeDecoder)
        ("url" := string)
        (succeed tag)
        ("domain" := domainDecoder)
        |> at [ "data" ]
        |> list
        |> at [ "data", "children" ]


timeDecoder : Decoder Float
timeDecoder =
    customDecoder float
        (\time -> Ok <| time * 1000)


domainDecoder : Decoder String
domainDecoder =
    customDecoder string
        <| \domain ->
            if String.contains "self.elm" domain then
                Ok "reddit.com"
            else
                Ok domain
