port module Analytics exposing (..)

import News.Story exposing (Story)


type alias Event =
    { category : String
    , action : String
    , url : String
    , title : Maybe String
    , tag : Maybe String
    , author : Maybe String
    }


githubRepo : String -> Event
githubRepo url =
    { category = "Github Link"
    , action = "click"
    , url = url
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


newsLink : Story -> Event
newsLink { tag, url, title, author } =
    { category = "News"
    , action = "click"
    , url = url
    , title = Just title
    , tag = Just tag
    , author = Just author
    }


tagLink : String -> String -> Event
tagLink tag url =
    { category = "Tag"
    , action = "click"
    , url = url
    , title = Nothing
    , tag = Just tag
    , author = Nothing
    }


newsletter : Event
newsletter =
    { category = "Newsletter"
    , action = "click"
    , url = ""
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


twitterLink : String -> Event
twitterLink url =
    { category = "Twitter"
    , action = "click"
    , url = url
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


error : String -> String -> Event
error display raw =
    { category = "Error"
    , action = display
    , url = raw
    , title = Nothing
    , tag = Nothing
    , author = Nothing
    }


port registerEvent : Event -> Cmd msg
