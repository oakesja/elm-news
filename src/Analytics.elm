port module Analytics
    exposing
        ( Msg(..)
        , msgToCmd
        , error
        )


type Msg
    = GithubLink String
    | NewsLink String String String String
    | TagLink String String
    | Newsletter
    | TwitterLink String


type alias Event =
    { category : String
    , action : String
    , url : String
    , title : Maybe String
    , tag : Maybe String
    , author : Maybe String
    }


msgToCmd : Msg -> Cmd msg
msgToCmd msg =
    case msg of
        GithubLink url ->
            githubRepo url

        NewsLink tag url title author ->
            newsLink tag url title author

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
        , author = Nothing
        }


newsLink : String -> String -> String -> String -> Cmd msg
newsLink tag url title author =
    registerEvent
        { category = "News"
        , action = "click"
        , url = url
        , title = Just title
        , tag = Just tag
        , author = Just author
        }


tagLink : String -> String -> Cmd msg
tagLink tag url =
    registerEvent
        { category = "Tag"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Just tag
        , author = Nothing
        }


newsletter : Cmd msg
newsletter =
    registerEvent
        { category = "Newsletter"
        , action = "click"
        , url = ""
        , title = Nothing
        , tag = Nothing
        , author = Nothing
        }


twitterLink : String -> Cmd msg
twitterLink url =
    registerEvent
        { category = "Twitter"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Nothing
        , author = Nothing
        }


error : String -> String -> Cmd msg
error display raw =
    registerEvent
        { category = "Error"
        , action = display
        , url = raw
        , title = Nothing
        , tag = Nothing
        , author = Nothing
        }


port registerEvent : Event -> Cmd msg
