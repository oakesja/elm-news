port module Main exposing (..)

import Html exposing (Html, a, text, div, h1, span)
import Html.Attributes exposing (href, class)
import Html.App
import Date exposing (Date)
import Task exposing (Task, andThen)
import Process
import Time
import Basics.Extra exposing (never)
import Http
import Window
import Header
import Footer
import ContentLink exposing (..)
import Reddit
import HackerNews
import ErrorManager
import Body


-- TODO fetch messages over a certain time span and on scroll or paging
-- TODO better logo
-- TODO google analytics
-- TODO purchase domain and setup with gh pages
-- TODO share with others
-- TODO create xml parser in elm using json decoders


type alias Model =
    { links : List ContentLink
    , now : Maybe Date
    , errorManager : ErrorManager.Model
    , width : Int
    }


init : ( Model, Cmd Msg )
init =
    let
        model =
            { links = []
            , now = Nothing
            , errorManager = ErrorManager.init
            , width = 0
            }

        fx =
            Cmd.batch
                [ fetchGoogleGroupMsgs "elm-dev"
                , fetchGoogleGroupMsgs "elm-discuss"
                , fetch Reddit.tag Reddit.fetch
                , fetch HackerNews.tag HackerNews.fetch
                , Task.perform never CurrentDate Date.now
                , Task.perform never WindowSize Window.size
                ]
    in
        ( model
        , fx
        )


type Msg
    = FetchSuccess ContentLinkResp
    | FetchError ContentLinkError
    | CurrentDate Date
    | ErrorManagerMessage ErrorManager.Msg
    | WindowSize Window.Size


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchSuccess resp ->
            let
                updatedModel =
                    { model | links = model.links ++ resp.links }
            in
                ( updatedModel
                , Cmd.none
                )

        FetchError rawError ->
            let
                _ =
                    Debug.log "" rawError.error

                error =
                    "Failed to fetch content from " ++ rawError.tag

                ( newErrorMang, fx ) =
                    ErrorManager.update (ErrorManager.AddError error) model.errorManager
            in
                ( { model | errorManager = newErrorMang }
                , Cmd.map ErrorManagerMessage fx
                )

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


view : Model -> Html Msg
view model =
    let
        showSpinner =
            List.isEmpty model.links && ErrorManager.noErrors model.errorManager
    in
        div [ class "main" ]
            [ Header.view
            , Body.view model.now model.width showSpinner model.links
            , Footer.view <| Maybe.map Date.year model.now
            , Html.App.map ErrorManagerMessage <| ErrorManager.view model.errorManager
            ]


fetch : String -> Task Http.Error (List ContentLink) -> Cmd Msg
fetch tag task =
    Task.perform (\error -> FetchError <| ContentLinkError tag <| toString error)
        (\links -> FetchSuccess <| ContentLinkResp tag links)
        task


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (ContentLinkResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (ContentLinkError -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ fetchedGoogleGroupMsgs FetchSuccess
        , errorGoogleGroupMsgs FetchError
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
