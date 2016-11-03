module Main exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Date exposing (Date)
import Time
import Task exposing (andThen)
import Process
import Components.Header as Header
import Components.Footer as Footer
import Html.App
import Basics.Extra exposing (never)
import Navigation exposing (Location)
import HomePage
import NewslettersPage
import Analytics
import Page exposing (Page)


type alias Model =
    { currentPage : Page
    , homePage : HomePage.Model
    , newslettersPage : NewslettersPage.Model
    , now : Maybe Date
    }


init : Page -> ( Model, Cmd Msg )
init page =
    { currentPage = page
    , homePage = HomePage.init
    , newslettersPage = NewslettersPage.init
    , now = Nothing
    }
        ! [ loadPage page ]


type Msg
    = HomePageMsg HomePage.Msg
    | NewslettersMsg NewslettersPage.Msg
    | AnalyticsEvent Analytics.Event
    | CurrentDate Date


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        HomePageMsg homeMsg ->
            let
                ( newHomePage, cmds ) =
                    HomePage.update homeMsg model.homePage
            in
                ( { model | homePage = newHomePage }
                , Cmd.map HomePageMsg cmds
                )

        NewslettersMsg newsLettersMsg ->
            let
                ( newNewsletter, cmds ) =
                    NewslettersPage.update newsLettersMsg model.newslettersPage
            in
                ( { model | newslettersPage = newNewsletter }
                , Cmd.map NewslettersMsg cmds
                )

        AnalyticsEvent event ->
            ( model, Analytics.registerEvent event )

        CurrentDate date ->
            ( { model | now = Just date }
            , Task.perform never CurrentDate <| (Process.sleep Time.minute) `andThen` \_ -> Date.now
            )


view : Model -> Html Msg
view model =
    div [ class "main" ]
        [ div []
            [ Header.view AnalyticsEvent
            , body model
            ]
        , Footer.view (Maybe.map Date.year model.now) AnalyticsEvent
        ]


body : Model -> Html Msg
body model =
    case model.currentPage of
        Page.Home ->
            HomePage.view model.now model.homePage
                |> Html.App.map HomePageMsg

        Page.Newsletters ->
            NewslettersPage.view model.newslettersPage
                |> Html.App.map NewslettersMsg

        Page.NotFound ->
            text "404"


urlUpdate : Page -> Model -> ( Model, Cmd Msg )
urlUpdate page model =
    ( { model | currentPage = page }
    , loadPage page
    )


loadPage : Page -> Cmd Msg
loadPage page =
    case page of
        Page.Home ->
            Cmd.map HomePageMsg HomePage.onPageLoad

        Page.Newsletters ->
            Cmd.map NewslettersMsg NewslettersPage.onPageLoad

        Page.NotFound ->
            Cmd.none


main : Program Never
main =
    Navigation.program
        (Navigation.makeParser Page.parse)
        { init = init
        , view = view
        , update = update
        , urlUpdate = urlUpdate
        , subscriptions = (\_ -> Sub.none)
        }
