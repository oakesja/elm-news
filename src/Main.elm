module Main exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Date exposing (Date)
import Time
import Task exposing (andThen)
import Process
import Components.Header as Header
import Components.Footer as Footer
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
import Links


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


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
    let
        ( model, cmd ) =
            loadPage location
                { currentPage = Page.NotFound
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
              , Task.perform CurrentDate Date.now
              , Task.perform WindowSize Window.size
              ]


type Msg
    = UrlChange Navigation.Location
    | HomePageMsg HomePage.Msg
    | NewslettersMsg NewslettersPage.Msg
    | NewsletterMsg NewsletterPage.Msg
    | AnalyticsEvent Analytics.Event
    | CurrentDate Date
    | WindowSize Window.Size
    | FetchedFiles (Result Http.Error (List NewsletterFile))
    | FetchedNewsletter String (Result Http.Error Newsletter)
    | IconClicked
    | NewsletterClicked


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UrlChange location ->
            loadPage location model

        HomePageMsg homeMsg ->
            let
                ( newHomePage, cmds ) =
                    HomePage.update homeMsg model.homePage
            in
                { model | homePage = newHomePage }
                    ! [ Cmd.map HomePageMsg cmds ]

        NewslettersMsg newsLettersMsg ->
            let
                ( newNewsletter, cmds ) =
                    NewslettersPage.update newsLettersMsg model.newslettersPage
            in
                { model | newslettersPage = newNewsletter }
                    ! [ Cmd.map NewslettersMsg cmds ]

        NewsletterMsg newsLetterMsg ->
            let
                ( newNewsletter, cmds ) =
                    NewsletterPage.update newsLetterMsg model.newsletterPage
            in
                { model | newsletterPage = newNewsletter }
                    ! [ Cmd.map NewsletterMsg cmds ]

        AnalyticsEvent event ->
            model ! [ Analytics.registerEvent event ]

        CurrentDate date ->
            { model | now = Just date }
                ! [ Process.sleep Time.minute
                        |> andThen (\_ -> Date.now)
                        |> Task.perform CurrentDate
                  ]

        WindowSize size ->
            { model | width = size.width } ! []

        FetchedFiles (Err error) ->
            { model | newsletterFiles = FetchData.Failed error } ! []

        FetchedFiles (Ok files) ->
            { model | newsletterFiles = FetchData.Fetched files } ! []

        FetchedNewsletter name (Err error) ->
            let
                _ =
                    Debug.log "error" error

                newsletters =
                    Dict.insert name (FetchData.Failed error) model.newsletters
            in
                { model | newsletters = newsletters } ! []

        FetchedNewsletter name (Ok newsletter) ->
            let
                newsletters =
                    Dict.insert name (FetchData.Fetched newsletter) model.newsletters
            in
                { model | newsletters = newsletters } ! []

        IconClicked ->
            model ! [ Navigation.newUrl Links.home ]

        NewsletterClicked ->
            model ! [ Navigation.newUrl Links.newsletters ]


view : Model -> Html Msg
view model =
    div [ class "main" ]
        [ Header.view
            { onLinkClick = AnalyticsEvent
            , onIconClick = IconClicked
            , onNewsletterClick = NewsletterClicked
            , screenWidth = model.width
            }
        , div
            [ class "body" ]
            [ body model ]
        , Footer.view (Maybe.map Date.year model.now) AnalyticsEvent
        ]


body : Model -> Html Msg
body model =
    case model.currentPage of
        Page.Home _ ->
            HomePage.view model.now model.width model.homePage
                |> Html.map HomePageMsg

        Page.Newsletters ->
            NewslettersPage.view model.newsletterFiles model.newslettersPage
                |> Html.map NewslettersMsg

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
                |> Html.map NewsletterMsg

        Page.NotFound ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


loadPage : Navigation.Location -> Model -> ( Model, Cmd Msg )
loadPage location model =
    let
        page =
            Page.parse location

        ( newModel, cmd ) =
            case page of
                Page.Home id ->
                    let
                        ( homePage, cmd ) =
                            HomePage.onPageLoad id model.homePage
                    in
                        { model | homePage = homePage }
                            ! [ Cmd.map HomePageMsg cmd ]

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
    in
        { newModel | currentPage = page }
            ! [ cmd
              , Analytics.pageView location.pathname
              ]


fetchNewsletterFiles : Model -> Cmd Msg
fetchNewsletterFiles model =
    case model.newsletterFiles of
        FetchData.NotStarted ->
            Http.send FetchedFiles NewsletterFile.fetch

        _ ->
            Cmd.none


fetchNewsletter : String -> Model -> ( Model, Cmd Msg )
fetchNewsletter name model =
    case Dict.get name model.newsletters of
        Nothing ->
            { model | newsletters = Dict.insert name FetchData.Fetching model.newsletters }
                ! [ Http.send
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


main : Program Never Model Msg
main =
    Navigation.program UrlChange
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
