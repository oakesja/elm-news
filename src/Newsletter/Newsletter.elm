module Newsletter.Newsletter exposing (Newsletter, Article, fetch)

import Json.Decode exposing (..)
import Http
import News.News as News exposing (DisplayStoryFrom)


type alias Newsletter =
    { startDate : String
    , endDate : String
    , year : String
    , articles : List Article
    }


type alias Article =
    { url : String
    , title : String
    , from : DisplayStoryFrom
    , tag : String
    }


fetch : String -> Http.Request Newsletter
fetch name =
    Http.get
        ("https://raw.githubusercontent.com/oakesja/elm-news-newsletters/master/newsletters/"
            ++ name
        )
        decoder


decoder : Decoder Newsletter
decoder =
    map4 Newsletter
        (field "start_date" string)
        (field "end_date" string)
        (field "year" string)
        (field "articles" (list articleDecoder))


articleDecoder : Decoder Article
articleDecoder =
    map4 Article
        (field "url" string)
        (field "title" string)
        fromDecoder
        (field "tag" string)


fromDecoder : Decoder DisplayStoryFrom
fromDecoder =
    oneOf
        [ map News.Author (field "author" string)
        , map News.Other (field "description" string)
        , fail "Failed to find an author or description"
        ]
