module News.Reddit exposing (fetch, tag)

import Json.Decode exposing (..)
import Http
import News.Story exposing (Story)


tag : String
tag =
    "reddit"


fetch : Http.Request (List Story)
fetch =
    Http.get "https://www.reddit.com/r/elm/new/.json" decoder


decoder : Decoder (List Story)
decoder =
    at [ "data", "children" ] <|
        list <|
            at [ "data" ] <|
                map5 Story
                    (field "author" string)
                    (field "title" string)
                    (field "created_utc" timeDecoder)
                    (field "url" string)
                    (succeed tag)


timeDecoder : Decoder Float
timeDecoder =
    map (\time -> time * 1000) float
