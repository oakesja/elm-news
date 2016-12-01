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
    { currentPage : PageModel
    , newsletterFiles : FetchData (List NewsletterFile)
    , newsletters : Dict String (FetchData Newsletter)
    , now : Maybe Date
    , width : Int
    }


type PageModel
    = HomePage HomePage.Model
    | NewslettersPage NewslettersPage.Model
    | NewsletterPage NewsletterPage.Model
    | NotFound


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
    let
        ( model, cmd ) =
            loadPage location
                { currentPage = NotFound
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
    case ( msg, model.currentPage ) of
        ( UrlChange location, _ ) ->
            loadPage location model

        ( HomePageMsg homeMsg, HomePage homePage ) ->
            let
                ( newHomePage, cmds ) =
                    HomePage.update homeMsg homePage
            in
                { model | currentPage = HomePage newHomePage }
                    ! [ Cmd.map HomePageMsg cmds ]

        ( NewslettersMsg newsLettersMsg, NewslettersPage page ) ->
            let
                ( newNewsletter, cmds ) =
                    NewslettersPage.update newsLettersMsg page
            in
                { model | currentPage = NewslettersPage newNewsletter }
                    ! [ Cmd.map NewslettersMsg cmds ]

        ( NewsletterMsg newsLetterMsg, NewsletterPage page ) ->
            let
                ( newNewsletter, cmds ) =
                    NewsletterPage.update newsLetterMsg page
            in
                { model | currentPage = NewsletterPage newNewsletter }
                    ! [ Cmd.map NewsletterMsg cmds ]

        ( AnalyticsEvent event, _ ) ->
            model ! [ Analytics.registerEvent event ]

        ( CurrentDate date, _ ) ->
            { model | now = Just date }
                ! [ Process.sleep Time.minute
                        |> andThen (\_ -> Date.now)
                        |> Task.perform CurrentDate
                  ]

        ( WindowSize size, _ ) ->
            { model | width = size.width } ! []

        ( FetchedFiles (Err error), _ ) ->
            { model | newsletterFiles = FetchData.Failed error } ! []

        ( FetchedFiles (Ok files), _ ) ->
            { model | newsletterFiles = FetchData.Fetched files } ! []

        ( FetchedNewsletter name (Err error), _ ) ->
            let
                _ =
                    Debug.log "error" error

                newsletters =
                    Dict.insert name (FetchData.Failed error) model.newsletters
            in
                { model | newsletters = newsletters } ! []

        ( FetchedNewsletter name (Ok newsletter), _ ) ->
            let
                newsletters =
                    Dict.insert name (FetchData.Fetched newsletter) model.newsletters
            in
                { model | newsletters = newsletters } ! []

        ( IconClicked, _ ) ->
            model ! [ Navigation.newUrl Links.home ]

        ( NewsletterClicked, _ ) ->
            model ! [ Navigation.newUrl Links.newsletters ]

        ( _, _ ) ->
            let
                _ =
                    Debug.log "received unexpected message" msg
            in
                model ! []


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
        HomePage page ->
            HomePage.view model.now model.width page
                |> Html.map HomePageMsg

        NewslettersPage page ->
            NewslettersPage.view model.newsletterFiles page
                |> Html.map NewslettersMsg

        NewsletterPage page ->
            NewsletterPage.view
                { screenWidth = model.width
                , files = (FetchData.default [] model.newsletterFiles)
                , newsletter =
                    Dict.get page.filename model.newsletters
                        |> Maybe.withDefault FetchData.NotStarted
                }
                page
                |> Html.map NewsletterMsg

        NotFound ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


loadPage : Navigation.Location -> Model -> ( Model, Cmd Msg )
loadPage location model =
    case Page.parse location of
        Page.Home id ->
            let
                ( homePage, cmd ) =
                    HomePage.init id

                registerPageView =
                    id
                        |> Maybe.map (\_ -> Analytics.pageView location.pathname)
                        |> Maybe.withDefault Cmd.none
            in
                { model | currentPage = HomePage homePage }
                    ! [ Cmd.map HomePageMsg cmd
                      , registerPageView
                      ]

        Page.Newsletters ->
            let
                ( page, cmd ) =
                    NewslettersPage.init
            in
                { model | currentPage = NewslettersPage page }
                    ! [ Cmd.map NewslettersMsg cmd
                      , fetchNewsletterFiles model
                      , Analytics.pageView location.pathname
                      ]

        Page.Newsletter name ->
            let
                ( updatedModel, cmd ) =
                    fetchNewsletter name model

                ( page, pageCmd ) =
                    NewsletterPage.init name
            in
                { updatedModel | currentPage = NewsletterPage page }
                    ! [ Cmd.map NewsletterMsg pageCmd
                      , cmd
                      , fetchNewsletterFiles model
                      , Analytics.pageView location.pathname
                      ]

        Page.NotFound ->
            model ! [ Analytics.pageView location.pathname ]


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
        [ Sub.map HomePageMsg HomePage.subscriptions
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
