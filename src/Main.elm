port module Main exposing (..)

import Html exposing (Html, a, text, div, header, footer, h1)
import Html.Attributes exposing (href, class)
import Html.App
import Date exposing (Date)
import Task
import Date.Format
import Basics.Extra exposing (never)


type alias Model =
    { messages : List GoogleGroupMsg
    , errors : List ( String, String )
    , now : Maybe Date
    , showHeader : Bool
    }


type alias GoogleGroupMsg =
    { author : String
    , title : String
    , date : Float
    , description : String
    , link : String
    , group : String
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
                , Task.perform never CurrentDate Date.now
                ]
    in
        ( model
        , fx
        )


type Msg
    = FetchGoogleGroupSuccess GoogleGroupResp
    | FetchGoogleGroupError GoogleGroupError
    | CurrentDate Date
    | ScrollUp
    | ScrollDown


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchGoogleGroupSuccess resp ->
            let
                updatedModel =
                    { model | messages = model.messages ++ resp.messages }
            in
                ( updatedModel
                , Cmd.none
                )

        FetchGoogleGroupError error ->
            let
                updatedModel =
                    { model | errors = ( error.group, error.message ) :: model.errors }
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
        [ headerView model.showHeader
        , body model
        , footer [] []
        ]


headerView : Bool -> Html Msg
headerView showHeader =
    let
        visibleClass =
            if showHeader then
                "header--visible"
            else
                "header--hidden"
    in
        header [ class <| "header dark_blue " ++ visibleClass ]
            [ logo ]


logo : Html Msg
logo =
    div [ class "logo" ]
        [ div [ class "logo_everything" ] [ text "everything" ]
        , div [ class "logo_elm" ] [ text "elm" ]
        ]


body : Model -> Html Msg
body model =
    div [ class "body" ]
        [ div []
            <| List.map (cardView model.now)
            <| List.reverse
            <| List.sortBy .date model.messages
        ]


cardView : Maybe Date -> GoogleGroupMsg -> Html Msg
cardView now msg =
    div [ class "card" ]
        [ tag msg.group
        , div [ class "card__description" ]
            [ div [ class "card__description__title" ]
                [ a [ href msg.link ]
                    [ text msg.title ]
                ]
            , div []
                [ text <| "By " ++ msg.author ]
            ]
        , div [ class "card__date" ]
            [ text <| formatDate now <| Date.fromTime msg.date ]
        ]


formatDate : Maybe Date -> Date -> String
formatDate maybeNow date =
    case maybeNow of
        Just now ->
            if Date.day now == Date.day date && Date.month now == Date.month date && Date.year now == Date.year date then
                Date.Format.format "%l:%M %p" date
            else
                Date.Format.format "%b %d" date

        Nothing ->
            Date.Format.format "%b %d" date


tag : String -> Html Msg
tag name =
    let
        colorClass =
            case name of
                "elm-dev" ->
                    "dark_blue"

                "elm-discuss" ->
                    "light_blue"

                _ ->
                    ""
    in
        div [ class <| "card__tag " ++ colorClass ]
            [ text name ]


type alias GoogleGroupResp =
    { group : String
    , messages : List GoogleGroupMsg
    }


type alias GoogleGroupError =
    { group : String
    , message : String
    }


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (GoogleGroupResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (GoogleGroupError -> msg) -> Sub msg


port scrollUp : (Float -> msg) -> Sub msg


port scrollDown : (Float -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ fetchedGoogleGroupMsgs FetchGoogleGroupSuccess
        , errorGoogleGroupMsgs FetchGoogleGroupError
        , scrollUp (\_ -> ScrollUp)
        , scrollDown (\_ -> ScrollDown)
        ]


main =
    Html.App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
