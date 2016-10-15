port module Analytics
    exposing
        ( Msg(..)
        , msgToCmd
        , error
        )


type Msg
    = GithubLink String
    | NewsLink String String String
    | TagLink String String
    | Newsletter
    | TwitterLink String


type alias Event =
    { category : String
    , action : String
    , url : String
    , title : Maybe String
    , tag : Maybe String
    }


msgToCmd : Msg -> Cmd msg
msgToCmd msg =
    case msg of
        GithubLink url ->
            githubRepo url

        NewsLink tag url title ->
            newsLink tag url title

        TagLink tag url ->
            tagLink tag url

        Newsletter ->
            newsletter

        TwitterLink url ->
            twitterLink url


githubRepo : String -> Cmd msg
githubRepo url =
    registerEvent
        { category = "Github Link"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Nothing
        }


newsLink : String -> String -> String -> Cmd msg
newsLink tag url title =
    registerEvent
        { category = "News"
        , action = "click"
        , url = url
        , title = Just title
        , tag = Just tag
        }


tagLink : String -> String -> Cmd msg
tagLink tag url =
    registerEvent
        { category = "Tag"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Just tag
        }


newsletter : Cmd msg
newsletter =
    registerEvent
        { category = "Newsletter"
        , action = "click"
        , url = ""
        , title = Nothing
        , tag = Nothing
        }


twitterLink : String -> Cmd msg
twitterLink url =
    registerEvent
        { category = "Twitter"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Nothing
        }


error : String -> String -> Cmd msg
error display raw =
    registerEvent
        { category = "Error"
        , action = display
        , url = raw
        , title = Nothing
        , tag = Nothing
        }


port registerEvent : Event -> Cmd msg
