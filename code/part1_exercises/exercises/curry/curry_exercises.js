require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = filter(function (x) {
    return match(/q/i, x);
});

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function (x, y) {
    return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = reduce(_keepHighest, Number.MIN_VALUE);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry(function (start, end, ary) {
    return [].slice.call(ary, start, end);
});


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = _.curry(function (n, ary) {
    return [].slice.call(ary, 0, n);
});


module.exports = {
    words: words,
    sentences: sentences,
    filterQs: filterQs,
    max: max,
    slice: slice,
    take: take
};
