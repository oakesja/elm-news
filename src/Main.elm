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
import Return exposing (Return)
import Dom


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
    loadPage location
        { currentPage = NotFound
        , newsletterFiles = FetchData.NotStarted
        , newsletters = Dict.empty
        , now = Nothing
        , width = 0
        }
        |> Return.command (Task.perform CurrentDate Date.now)
        |> Return.command (Task.perform WindowSize Window.size)


type Msg
    = UrlChange Navigation.Location
    | PageMsg PageMsg
    | AnalyticsEvent Analytics.Event
    | CurrentDate Date
    | WindowSize Window.Size
    | FetchedFiles (Result Http.Error (List NewsletterFile))
    | FetchedNewsletter String (Result Http.Error Newsletter)
    | IconClicked
    | NewsletterClicked
    | NoOp


type PageMsg
    = HomePageMsg HomePage.Msg
    | NewslettersMsg NewslettersPage.Msg
    | NewsletterMsg NewsletterPage.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UrlChange location ->
            loadPage location model

        PageMsg pageMsg ->
            updateCurrentPage pageMsg model.currentPage
                |> Return.mapBoth PageMsg (\page -> { model | currentPage = page })

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

        NoOp ->
            model ! []


updateCurrentPage : PageMsg -> PageModel -> ( PageModel, Cmd PageMsg )
updateCurrentPage msg model =
    case ( msg, model ) of
        ( HomePageMsg msg, HomePage page ) ->
            HomePage.update msg page
                |> Return.mapBoth HomePageMsg HomePage

        ( NewslettersMsg msg, NewslettersPage page ) ->
            NewslettersPage.update msg page
                |> Return.mapBoth NewslettersMsg NewslettersPage

        ( NewsletterMsg msg, NewsletterPage page ) ->
            NewsletterPage.update msg page
                |> Return.mapBoth NewsletterMsg NewsletterPage

        x ->
            let
                _ =
                    Debug.log "received unexpected message" msg
            in
                Return.singleton model


loadPage : Navigation.Location -> Model -> ( Model, Cmd Msg )
loadPage location model =
    let
        pageView =
            Analytics.pageView location.pathname

        mapToCurrentPage pageMsg pageModel =
            Return.mapBoth
                (PageMsg << pageMsg)
                (\page -> { model | currentPage = pageModel page })
    in
        case Page.parse location of
            Page.Home ->
                HomePage.init
                    |> mapToCurrentPage HomePageMsg HomePage
                    |> Return.command resetFocus
                    |> Return.command pageView

            Page.Newsletters ->
                NewslettersPage.init
                    |> mapToCurrentPage NewslettersMsg NewslettersPage
                    |> Return.effect_ fetchNewsletterFiles
                    |> Return.command resetFocus
                    |> Return.command pageView

            Page.Newsletter name ->
                NewsletterPage.init name
                    |> mapToCurrentPage NewsletterMsg NewsletterPage
                    |> Return.andThen (fetchNewsletter name)
                    |> Return.effect_ fetchNewsletterFiles
                    |> Return.command resetFocus
                    |> Return.command pageView

            Page.NotFound ->
                model ! [ pageView ]


resetFocus : Cmd Msg
resetFocus =
    Dom.focus "logo"
        |> Task.attempt (\_ -> NoOp)


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
                |> Html.map (PageMsg << HomePageMsg)

        NewslettersPage page ->
            NewslettersPage.view model.newsletterFiles page
                |> Html.map (PageMsg << NewslettersMsg)

        NewsletterPage page ->
            NewsletterPage.view
                { screenWidth = model.width
                , files = (FetchData.default [] model.newsletterFiles)
                , newsletter =
                    Dict.get page.filename model.newsletters
                        |> Maybe.withDefault FetchData.NotStarted
                }
                page
                |> Html.map (PageMsg << NewsletterMsg)

        NotFound ->
            div [ class "not__found" ]
                [ text "Page Not Found" ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Sub.map (PageMsg << HomePageMsg) HomePage.subscriptions
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
