port module Main exposing (..)

import BeerSongTest
import Test.Runner.Node exposing (run, TestProgram)
import Json.Encode exposing (Value)


main : TestProgram
main =
    run emit BeerSongTest.all


port emit : ( String, Value ) -> Cmd msg
