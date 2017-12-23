port module Analytics exposing (..)


type alias Event =
    { category : String
    , action : String
    , label : String
    , title : Maybe String
    , tag : Maybe String
    , author : Maybe String
    }


type alias NewsEventInfo =
    { tag : String
    , url : String
    , title : String
    , author : String
    }


githubRepo : Event
githubRepo =
    { category = "Github Link"
    , action = "click"
    , label = ""
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


newsLink : NewsEventInfo -> Event
newsLink { tag, url, title, author } =
    { category = "News"
    , action = "click"
    , label = url
    , title = Just title
    , tag = Just tag
    , author = Just author
    }


archivedNewsLink : NewsEventInfo -> Event
archivedNewsLink { tag, url, title, author } =
    { category = "Archived News"
    , action = "click"
    , label = url
    , title = Just title
    , tag = Just tag
    , author = Just author
    }


tagLink : String -> String -> Event
tagLink tag url =
    { category = "Tag"
    , action = "click"
    , label = url
    , title = Nothing
    , tag = Just tag
    , author = Nothing
    }


newsletterSignup : Event
newsletterSignup =
    { category = "Newsletter"
    , action = "signup"
    , label = ""
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


twitterLink : Event
twitterLink =
    { category = "Twitter"
    , action = "click"
    , label = ""
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


error : String -> String -> Event
error display raw =
    { category = "Error"
    , action = display
    , label = raw
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


port registerEvent : Event -> Cmd msg


port pageView : String -> Cmd msg
