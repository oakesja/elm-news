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
import NewsletterPage
import Analytics
import Page exposing (Page)
import Window


type alias Model =
    { currentPage : Page
    , homePage : HomePage.Model
    , newslettersPage : NewslettersPage.Model
    , newsletterPage : NewsletterPage.Model
    , now : Maybe Date
    , width : Int
    }


init : Page -> ( Model, Cmd Msg )
init page =
    { currentPage = page
    , homePage = HomePage.init
    , newslettersPage = NewslettersPage.init
    , newsletterPage = NewsletterPage.init
    , now = Nothing
    , width = 0
    }
        ! [ loadPage page
          , Task.perform never CurrentDate Date.now
          , Task.perform never WindowSize Window.size
          ]


type Msg
    = HomePageMsg HomePage.Msg
    | NewslettersMsg NewslettersPage.Msg
    | NewsletterMsg NewsletterPage.Msg
    | AnalyticsEvent Analytics.Event
    | CurrentDate Date
    | WindowSize Window.Size


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

        NewsletterMsg newsLetterMsg ->
            let
                ( newNewsletter, cmds ) =
                    NewsletterPage.update newsLetterMsg model.newsletterPage
            in
                ( { model | newsletterPage = newNewsletter }
                , Cmd.map NewsletterMsg cmds
                )

        AnalyticsEvent event ->
            ( model, Analytics.registerEvent event )

        CurrentDate date ->
            ( { model | now = Just date }
            , Task.perform never CurrentDate <| (Process.sleep Time.minute) `andThen` \_ -> Date.now
            )

        WindowSize size ->
            ( { model | width = size.width }
            , Cmd.none
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
            HomePage.view model.now model.width model.homePage
                |> Html.App.map HomePageMsg

        Page.Newsletters ->
            NewslettersPage.view model.newslettersPage
                |> Html.App.map NewslettersMsg

        Page.Newsletter name ->
            NewsletterPage.view model.width model.newsletterPage
                |> Html.App.map NewsletterMsg

        Page.NotFound ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


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

        Page.Newsletter name ->
            Cmd.map NewsletterMsg (NewsletterPage.onPageLoad name)

        Page.NotFound ->
            Cmd.none


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Sub.map HomePageMsg (HomePage.subscriptions model.homePage)
        , Window.resizes WindowSize
        ]


main : Program Never
main =
    Navigation.program
        (Navigation.makeParser Page.parse)
        { init = init
        , view = view
        , update = update
        , urlUpdate = urlUpdate
        , subscriptions = subscriptions
        }
