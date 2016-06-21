module Reddit exposing (fetch, tag)

import Json.Decode exposing (..)
import Task exposing (Task)
import Http
import String
import ContentLink exposing (ContentLink)


tag : String
tag =
    "reddit"


fetch : Task Http.Error (List ContentLink)
fetch =
    Http.get decoder "https://www.reddit.com/r/elm/new/.json"


decoder : Decoder (List ContentLink)
decoder =
    object6 ContentLink
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
