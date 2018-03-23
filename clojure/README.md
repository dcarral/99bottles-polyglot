# Beer song

99 Bottles of Beer is an algorithmic children's song which has just enough complexity to teach you deep truths about object oriented programming.

Our goal is to produce the lyrics to that beloved classic, that field-trip favorite. You can find them @ [`dcarral/99bottles-polyglot/SONG_LYRICS.md`](https://github.com/dcarral/99bottles-polyglot/blob/master/SONG_LYRICS.md).

## Running

To run the environment is necessary `Docker`.

In `clojure` directory run:

```sh
docker run -ti --rm -v $(pwd):/code -w /code clojure bash
```

You can run the test suite from the exercise
directory with:

```sh
lein test
```    
