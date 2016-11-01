module Newsletter.NewsletterFile exposing (NewsletterFile, fetch)

import Json.Decode exposing (..)
import Http
import Task exposing (Task)


type alias NewsletterFile =
    { name : String
    , url : String
    }


fetch : Task Http.Error (List NewsletterFile)
fetch =
    Http.get (list decoder)
        "https://api.github.com/repos/oakesja/elm-news-newsletters/contents/newsletters"


decoder : Decoder NewsletterFile
decoder =
    object2 NewsletterFile
        ("name" := string)
        ("download_url" := string)
