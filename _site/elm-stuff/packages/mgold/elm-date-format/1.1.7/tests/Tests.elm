module Tests exposing (all)

{- A simple test an example of the library.
   Does not test every option, you can submit PRs for that.
-}

import Date
import Date.Format
import String exposing (padLeft, join)
import Expect
import Test exposing (..)


-- test name, expected value, format string


all : Test
all =
    describe "Date Format tests" <|
        List.map (makeTest << formatTest) testData


type alias TestTriple =
    ( String, String, String )


testData : List TestTriple
testData =
    [ ( "numeric date", "12/08/2014", "%d/%m/%Y" )
    , ( "spelled out date", "Tuesday, August 12, 2014", "%A, %B %d, %Y" )
    , ( "time", expectedTime, "%I:%M:%S %p" )
    , ( "time no spaces", expectedTimeNoSpace, "%H%M%S" )
    , ( "literal %", expectedTimeWithLiteral, "%H%%%M" )
    ]


expectedTimeWithLiteral =
    join "%" [ sampleHour, sampleMinute ]


expectedTimeNoSpace =
    join "" [ sampleHour, sampleMinute, sampleMinute ]


expectedTime =
    (join ":" [ sampleHour, sampleMinute, sampleMinute ])
        ++ (case Date.hour sampleDate < 12 of
                True ->
                    " AM"

                False ->
                    " PM"
           )


sampleDate : Date.Date
sampleDate =
    "2014-08-12T04:53:53Z"
        |> Date.fromString
        |> Result.withDefault (Date.fromTime 1.407833631116e12)


pad : Int -> String
pad =
    toString >> (padLeft 2 '0')


sampleHour : String
sampleHour =
    Date.hour sampleDate
        |> pad


sampleMinute : String
sampleMinute =
    Date.minute sampleDate
        |> pad


sampleSecond : String
sampleSecond =
    Date.second sampleDate
        |> pad


formatSampleDate : String -> String
formatSampleDate fstring =
    Date.Format.format fstring sampleDate


formatTest : TestTriple -> TestTriple
formatTest ( a, b, format ) =
    ( a, b, formatSampleDate format )


makeTest : TestTriple -> Test
makeTest ( described, expected, actual ) =
    test described <| \() -> Expect.equal actual expected
