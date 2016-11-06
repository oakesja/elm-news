module News.Reddit exposing (fetch, tag)

import Json.Decode exposing (..)
import Http
import News.Story exposing (Story)
import Task exposing (Task)


tag : String
tag =
    "reddit"


fetch : Task Http.Error (List Story)
fetch =
    Http.get decoder "https://www.reddit.com/r/elm/new/.json"


decoder : Decoder (List Story)
decoder =
    at [ "data", "children" ] <|
        list <|
            at [ "data" ] <|
                object5 Story
                    ("author" := string)
                    ("title" := string)
                    ("created_utc" := timeDecoder)
                    ("url" := string)
                    (succeed tag)


timeDecoder : Decoder Float
timeDecoder =
    customDecoder float
        (\time -> Ok <| time * 1000)
