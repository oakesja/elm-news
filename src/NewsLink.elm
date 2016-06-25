module NewsLink
    exposing
        ( NewsLink
        , NewsLinkError
        , NewsLinkResp
        )


type alias NewsLink =
    { author : String
    , title : String
    , date : Float
    , link : String
    , tag : String
    , domain : String
    }


type alias NewsLinkResp =
    { tag : String
    , links : List NewsLink
    }


type alias NewsLinkError =
    { tag : String
    , error : String
    }
