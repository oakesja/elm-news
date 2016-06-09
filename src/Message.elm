module Message
    exposing
        ( Message
        , MessageError
        , MessageResp
        )


type alias Message =
    { author : String
    , title : String
    , date : Float
    , link : String
    , tag : String
    }


type alias MessageResp =
    { tag : String
    , messages : List Message
    }


type alias MessageError =
    { tag : String
    , error : String
    }
