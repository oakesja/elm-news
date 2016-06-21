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
import DateFormatter
import Header
import Footer
import Tag
import Message exposing (..)
import Reddit
import HackerNews
import Spinner
import ErrorManager


-- TODO create card component
-- TODO show which links have been visited
-- TODO rename messages model
-- TODO fetch messages over a certain time span and on scroll or paging
-- TODO google analytics
-- TODO purchase domain and setup with gh pages
-- TODO share with others
-- TODO create xml parser in elm using json decoders


type alias Model =
    { messages : List Message
    , now : Maybe Date
    , errorManager : ErrorManager.Model
    , width : Int
    }


init : ( Model, Cmd Msg )
init =
    let
        model =
            { messages = []
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
    = FetchMessageSuccess MessageResp
    | FetchMessageError MessageError
    | CurrentDate Date
    | ErrorManagerMessage ErrorManager.Msg
    | WindowSize Window.Size


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchMessageSuccess resp ->
            let
                updatedModel =
                    { model | messages = model.messages ++ resp.messages }
            in
                ( updatedModel
                , Cmd.none
                )

        FetchMessageError rawError ->
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
    div [ class "main" ]
        [ Header.view
        , body model
        , Footer.view <| Maybe.map Date.year model.now
        , Html.App.map ErrorManagerMessage <| ErrorManager.view model.errorManager
        ]


body : Model -> Html Msg
body model =
    let
        cards =
            if List.isEmpty model.messages && ErrorManager.noErrors model.errorManager then
                Spinner.view
            else
                div [ class "cards" ]
                    <| List.map (cardView model.now model.width)
                    <| List.reverse
                    <| List.sortBy .date model.messages
    in
        div [ class "body" ]
            [ cards ]


cardView : Maybe Date -> Int -> Message -> Html Msg
cardView now width msg =
    let
        cardLinkAttrs =
            if width < 600 then
                [ href msg.link
                , class "card__link"
                ]
            else
                [ class "card__link" ]
    in
        a cardLinkAttrs
            [ div [ class "card" ]
                [ Tag.view msg.tag
                , div [ class "card__description" ]
                    [ div [ class "card__description__header" ]
                        [ a
                            [ href msg.link
                            , class "card__description__title black_text"
                            ]
                            [ text msg.title ]
                        , span [ class "card__description__domain" ]
                            [ text <| "(" ++ msg.domain ++ ")" ]
                        ]
                    , div []
                        [ text <| "By " ++ msg.author ]
                    ]
                , div [ class "card__date" ]
                    [ text <| DateFormatter.format now <| Date.fromTime msg.date ]
                ]
            ]


fetch : String -> Task Http.Error (List Message) -> Cmd Msg
fetch tag task =
    Task.perform (\error -> FetchMessageError <| MessageError tag <| toString error)
        (\msgs -> FetchMessageSuccess <| MessageResp tag msgs)
        task


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (MessageResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (MessageError -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ fetchedGoogleGroupMsgs FetchMessageSuccess
        , errorGoogleGroupMsgs FetchMessageError
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
