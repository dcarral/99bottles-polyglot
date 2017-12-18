var BeerSong = require('./beer-song');

describe('BeerSong', function () {
  var beerSong = new BeerSong();

  it('handles first generic verse', function () {
    var expected = '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n';
    expect(beerSong.verse(99)).toEqual(expected);
  });

  xit('handles last generic verse', function () {
    var expected = '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n';
    expect(beerSong.verse(3)).toEqual(expected);
  });

  xit('handles third to last verse', function () {
    var expected = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    expect(beerSong.verse(2)).toEqual(expected);
  });

  xit('handles penultimate verse', function () {
    var expected = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    expect(beerSong.verse(1)).toEqual(expected);
  });

  xit('handles last verse', function () {
    var expected = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(beerSong.verse(0)).toEqual(expected);
  });

  xit('handles first three verses', function () {
    var expected = '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n';
    expect(beerSong.verses(99, 97)).toEqual(expected);
  });

  xit('handles last three verses', function () {
    var expected = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(beerSong.verses(2, 0)).toEqual(expected);
  });
});
