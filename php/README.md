# Beer song

99 Bottles of Beer is an algorithmic children's song which has just enough complexity to teach you deep truths about object oriented programming.

Our goal is to produce the lyrics to that beloved classic, that field-trip favorite. You can find them @ [`dcarral/99bottles-polyglot/SONG_LYRICS.md`](https://github.com/dcarral/99bottles-polyglot/blob/master/SONG_LYRICS.md).

phpunit setup
==========

Easiest way to set up the PHP suite is by using the Composer:

[https://getcomposer.org/download/](https://getcomposer.org/download/)

This is a simple bootstrap project for PHP with phpunit

For PHP 5.6 or above just run:

```
composer install

```

To run the tests just run:

```
./vendor/bin/phpunit

```
You need PHP 5.6 or above to run it since we have phpunit 5.2.


If you have legacy version of php please change composer.json file
and include the version that is compatible with you version of PHP


If you change the phpunit version do not forget to run:

```
./composer update --with-dependencies

```
