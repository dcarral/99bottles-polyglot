# Beer song

99 Bottles of Beer is an algorithmic children's song which has just enough complexity to teach you deep truths about object oriented programming.

Our goal is to produce the lyrics to that beloved classic, that field-trip favorite. You can find them @ [`dcarral/99bottles-polyglot/SONG_LYRICS.md`](https://github.com/dcarral/99bottles-polyglot/blob/master/SONG_LYRICS.md).

## Running

To run the environment is necessary `Docker`.
In `js` directory run:

```sh
docker build -t 99_bottles_beer/node .
docker run -ti --rm -v $(pwd):/code 99_bottles_beer/node bash
```

You can run the test suite from the exercise
directory with:

```sh
npm test
```    

Notice that all but the first test have been marked “pending”. Once you get a test passing, you can unskip the next one by changing `xit` to `it`.
