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
import FetchData exposing (FetchData)
import Newsletter.NewsletterFile as NewsletterFile exposing (NewsletterFile)
import Newsletter.Newsletter as Newsletter exposing (Newsletter)
import Http
import Dict exposing (Dict)


type alias Model =
    { currentPage : Page
    , homePage : HomePage.Model
    , newslettersPage : NewslettersPage.Model
    , newsletterPage : NewsletterPage.Model
    , newsletterFiles : FetchData (List NewsletterFile)
    , newsletters : Dict String (FetchData Newsletter)
    , now : Maybe Date
    , width : Int
    }


init : Page -> ( Model, Cmd Msg )
init page =
    let
        ( model, cmd ) =
            loadPage page
                { currentPage = page
                , homePage = HomePage.init
                , newslettersPage = NewslettersPage.init
                , newsletterPage = NewsletterPage.init
                , newsletterFiles = FetchData.NotStarted
                , newsletters = Dict.empty
                , now = Nothing
                , width = 0
                }
    in
        model
            ! [ cmd
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
    | FailedToFetchFiles Http.Error
    | FetchedFiles (List NewsletterFile)
    | FailedToFetchNewsletter String Http.Error
    | FetchedNewsletter String Newsletter


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

        FailedToFetchFiles error ->
            { model | newsletterFiles = FetchData.Failed error } ! []

        FetchedFiles files ->
            { model | newsletterFiles = FetchData.Fetched files } ! []

        FailedToFetchNewsletter name error ->
            let
                _ =
                    Debug.log "error" error

                newsletters =
                    Dict.insert name (FetchData.Failed error) model.newsletters
            in
                { model | newsletters = newsletters } ! []

        FetchedNewsletter name newsletter ->
            let
                newsletters =
                    Dict.insert name (FetchData.Fetched newsletter) model.newsletters
            in
                { model | newsletters = newsletters } ! []


view : Model -> Html Msg
view model =
    div [ class "main" ]
        [ Header.view AnalyticsEvent
        , div
            [ class "body" ]
            [ body model ]
        , Footer.view (Maybe.map Date.year model.now) AnalyticsEvent
        ]


body : Model -> Html Msg
body model =
    case model.currentPage of
        Page.Home ->
            HomePage.view model.now model.width model.homePage
                |> Html.App.map HomePageMsg

        Page.Newsletters ->
            NewslettersPage.view model.newsletterFiles model.newslettersPage
                |> Html.App.map NewslettersMsg

        Page.Newsletter name ->
            NewsletterPage.view
                { screenWidth = model.width
                , files = (FetchData.default [] model.newsletterFiles)
                , filename = name
                , newsletter =
                    Dict.get name model.newsletters
                        |> Maybe.withDefault FetchData.NotStarted
                }
                model.newsletterPage
                |> Html.App.map NewsletterMsg

        Page.NotFound ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


urlUpdate : Page -> Model -> ( Model, Cmd Msg )
urlUpdate page model =
    loadPage page { model | currentPage = page }


loadPage : Page -> Model -> ( Model, Cmd Msg )
loadPage page model =
    case page of
        Page.Home ->
            model ! [ Cmd.map HomePageMsg HomePage.onPageLoad ]

        Page.Newsletters ->
            model
                ! [ Cmd.map NewslettersMsg NewslettersPage.onPageLoad
                  , fetchNewsletterFiles model
                  ]

        Page.Newsletter name ->
            let
                ( updatedModel, cmd ) =
                    fetchNewsletter name model
            in
                updatedModel
                    ! [ Cmd.map NewsletterMsg (NewsletterPage.onPageLoad name)
                      , cmd
                      , fetchNewsletterFiles model
                      ]

        Page.NotFound ->
            model ! []


fetchNewsletterFiles : Model -> Cmd Msg
fetchNewsletterFiles model =
    case model.newsletterFiles of
        FetchData.NotStarted ->
            Task.perform FailedToFetchFiles FetchedFiles NewsletterFile.fetch

        _ ->
            Cmd.none


fetchNewsletter : String -> Model -> ( Model, Cmd Msg )
fetchNewsletter name model =
    case Dict.get name model.newsletters of
        Nothing ->
            { model | newsletters = Dict.insert name FetchData.Fetching model.newsletters }
                ! [ Task.perform
                        (FailedToFetchNewsletter name)
                        (FetchedNewsletter name)
                        (Newsletter.fetch name)
                  ]

        Just _ ->
            model ! []


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
