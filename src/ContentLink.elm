module ContentLink
    exposing
        ( ContentLink
        , ContentLinkError
        , ContentLinkResp
        )


type alias ContentLink =
    { author : String
    , title : String
    , date : Float
    , link : String
    , tag : String
    , domain : String
    }


type alias ContentLinkResp =
    { tag : String
    , links : List ContentLink
    }


type alias ContentLinkError =
    { tag : String
    , error : String
    }
