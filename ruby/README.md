# Beer Song

Our goal is to produce the lyrics to that beloved classic, that field-trip favorite: 99 Bottles of Beer on the Wall.

You can find the full lyrics @ [`dcarral/99bottles-polyglot/SONG_LYRICS.md`](https://github.com/dcarral/99bottles-polyglot/blob/master/SONG_LYRICS.md).

## For bonus points

Did you get the tests passing and the code clean? If you want to, these
are some additional things you could try:

* Remove as much duplication as you possibly can.
* Optimize for readability, even if it means introducing duplication.
* If you've removed all the duplication, do you have a lot of
  conditionals? Try replacing the conditionals with polymorphism, if it
  applies in this language. How readable is it?


For running the tests provided, you will need the Minitest gem. Open a
terminal window and run the following command to install minitest:

    gem install minitest

If you would like color output, you can `require 'minitest/pride'` in
the test file, or note the alternative instruction, below, for running
the test file.

In order to run the test, you can run the test file from the exercise
directory:

    ruby beer_song_test.rb

To include color from the command line:

    ruby -r minitest/pride beer_song_test.rb


## Original source

Learn to Program by Chris Pine [http://pine.fm/LearnToProgram/?Chapter=06](http://pine.fm/LearnToProgram/?Chapter=06)
