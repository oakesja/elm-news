port module Main exposing (..)

import Html exposing (Html, a, text, div, h1, span)
import Html.Attributes exposing (href, class)
import Html.App
import Date exposing (Date)
import Task exposing (Task, andThen)
import Process
import Time
import Basics.Extra exposing (never)
import Window
import Components.Header as Header
import Components.Footer as Footer
import ErrorManager
import News.Manager as NewsManager
import Analytics


-- TODO fetch messages over a certain time span and on scroll or paging
-- TODO write readme for description, bugs, feature request, PRs and move deployment stuff to another md


type alias Model =
    { now : Maybe Date
    , newsManager : NewsManager.Model
    , errorManager : ErrorManager.Model
    , width : Int
    }


init : ( Model, Cmd Msg )
init =
    let
        ( newsManager, newsManagerCmd ) =
            NewsManager.init

        model =
            { now = Nothing
            , newsManager = newsManager
            , errorManager = ErrorManager.init
            , width = 0
            }

        cmd =
            Cmd.batch
                [ Cmd.map NewsManagerMsg newsManagerCmd
                , Task.perform never CurrentDate Date.now
                , Task.perform never WindowSize Window.size
                ]
    in
        ( model, cmd )


type Msg
    = CurrentDate Date
    | ErrorManagerMessage ErrorManager.Msg
    | WindowSize Window.Size
    | AnalyticsMsg Analytics.Msg
    | NewsManagerMsg NewsManager.InternalMsg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CurrentDate date ->
            ( { model | now = Just date }
            , Task.perform never CurrentDate <| (Process.sleep Time.minute) `andThen` \_ -> Date.now
            )

        ErrorManagerMessage errorMsg ->
            let
                ( newErrorMang, fx ) =
                    ErrorManager.update errorMsg model.errorManager
            in
                ( { model | errorManager = newErrorMang }
                , Cmd.map ErrorManagerMessage fx
                )

        WindowSize size ->
            ( { model | width = size.width }
            , Cmd.none
            )

        AnalyticsMsg analyticsMsg ->
            ( model, Analytics.msgToCmd analyticsMsg )

        NewsManagerMsg cardMangerMsg ->
            let
                ( newNewsManager, cmd ) =
                    NewsManager.update cardMangerMsg model.newsManager
            in
                ( { model | newsManager = newNewsManager }
                , Cmd.map cardMsgTranslator cmd
                )


cardMsgTranslator : NewsManager.Translator Msg
cardMsgTranslator =
    NewsManager.translateMsg
        { onInternalMessage = NewsManagerMsg
        , onError = ErrorManagerMessage << ErrorManager.AddError
        }


view : Model -> Html Msg
view model =
    div [ class "main" ]
        [ Html.App.map AnalyticsMsg Header.view
        , Html.App.map AnalyticsMsg <|
            NewsManager.view model.now model.width model.newsManager
        , Html.App.map AnalyticsMsg <|
            Footer.view (Maybe.map Date.year model.now)
        , Html.App.map ErrorManagerMessage <|
            ErrorManager.view model.errorManager
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Sub.map NewsManagerMsg NewsManager.subscriptions
        , Window.resizes WindowSize
        ]


main : Program Never
main =
    Html.App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
