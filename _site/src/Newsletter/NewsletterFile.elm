module Newsletter.NewsletterFile exposing (NewsletterFile, fetch)

import Json.Decode exposing (..)
import Json
import Http
import Date exposing (Date)
import String


type alias NewsletterFile =
    { date : Date
    , url : String
    , name : String
    }


fetch : Http.Request (List NewsletterFile)
fetch =
    Http.get
        "https://api.github.com/repos/oakesja/elm-news-newsletters/contents/newsletters"
        (list decoder)


decoder : Decoder NewsletterFile
decoder =
    map3 NewsletterFile
        (Json.result dateFromNameDecoder)
        (field "download_url" string)
        nameDecoder


dateFromNameDecoder : Decoder (Result String Date)
dateFromNameDecoder =
    map
        parseDateFromFile
        nameDecoder


parseDateFromFile : String -> Result String Date
parseDateFromFile name =
    name
        |> String.split "."
        |> List.head
        |> Maybe.withDefault ""
        |> Date.fromString


nameDecoder : Decoder String
nameDecoder =
    field "name" string
