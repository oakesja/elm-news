port module Main exposing (..)

import Html exposing (Html, a, text, div, header, footer, h1)
import Html.Attributes exposing (href, class)
import Html.App
import Date exposing (Date)
import Task exposing (Task)
import Basics.Extra exposing (never)
import Header
import Tag
import Message exposing (..)
import Reddit
import DateFormatter


-- TODO handle errors
-- TODO move google group stuff to seperate module


type alias Model =
    { messages : List Message
    , errors : List ( String, String )
    , now : Maybe Date
    , showHeader : Bool
    }


init : ( Model, Cmd Msg )
init =
    let
        model =
            { messages = []
            , errors = []
            , now = Nothing
            , showHeader = True
            }

        fx =
            Cmd.batch
                [ fetchGoogleGroupMsgs "elm-dev"
                , fetchGoogleGroupMsgs "elm-discuss"
                , Reddit.fetchCmd FetchMessageSuccess FetchMessageError
                , Task.perform never CurrentDate Date.now
                ]
    in
        ( model
        , fx
        )


type Msg
    = FetchMessageSuccess MessageResp
    | FetchMessageError MessageError
    | CurrentDate Date
    | ScrollUp
    | ScrollDown


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

        FetchMessageError error ->
            let
                updatedModel =
                    { model | errors = ( error.tag, Debug.log "" error.error ) :: model.errors }
            in
                ( updatedModel
                , Cmd.none
                )

        CurrentDate date ->
            ( { model | now = Just date }
            , Cmd.none
            )

        ScrollUp ->
            ( { model | showHeader = True }
            , Cmd.none
            )

        ScrollDown ->
            ( { model | showHeader = False }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    div []
        [ Header.view model.showHeader
        , body model
        , footer [] []
        ]


body : Model -> Html Msg
body model =
    div [ class "body grey" ]
        [ div []
            <| List.map (cardView model.now)
            <| List.reverse
            <| List.sortBy .date model.messages
        ]


cardView : Maybe Date -> Message -> Html Msg
cardView now msg =
    div [ class "card" ]
        [ Tag.view msg.tag
        , div [ class "card__description" ]
            [ div [ class "card__description__title" ]
                [ a [ href msg.link ]
                    [ text msg.title ]
                ]
            , div []
                [ text <| "By " ++ msg.author ]
            ]
        , div [ class "card__date" ]
            [ text <| DateFormatter.format now <| Date.fromTime msg.date ]
        ]


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (MessageResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (MessageError -> msg) -> Sub msg


port scrollUp : (Float -> msg) -> Sub msg


port scrollDown : (Float -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ fetchedGoogleGroupMsgs FetchMessageSuccess
        , errorGoogleGroupMsgs FetchMessageError
        , scrollUp (\_ -> ScrollUp)
        , scrollDown (\_ -> ScrollDown)
        ]


main : Program Never
main =
    Html.App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
