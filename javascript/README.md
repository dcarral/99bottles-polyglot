# Beer song

99 Bottles of Beer is an algorithmic children's song which has just enough complexity to teach you deep truths about object oriented programming.

Our goal is to produce the lyrics to that beloved classic, that field-trip favorite. You can find them @ [`dcarral/99bottles-polyglot/SONG_LYRICS.md`](https://github.com/dcarral/99bottles-polyglot/blob/master/SONG_LYRICS.md).

## Running the test suite

For running the provided tests, [Jasmine](https://jasmine.github.io/) needs to be installed. Open a
terminal window and run the following command to install it:

```sh
  npm install -g jasmine
```

You can run the test suite from the exercise
directory with:

```sh
  jasmine beer-song.spec.js
```    

Notice that all but the first test have been marked “pending”. Once you get a test passing, you can unskip the next one by changing `xit` to `it`.
