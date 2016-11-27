module News.Story exposing (..)


type alias Story =
    { author : String
    , title : String
    , date : Float
    , url : String
    , tag : String
    }


type alias StoryResp =
    { tag : String
    , stories : List Story
    }


type alias StoryError =
    { tag : String
    , error : String
    }
