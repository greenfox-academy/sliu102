'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
fruits.map(function (val) {
  var count = 0;
  for (var i = 0; i<val.length; i++) {
    if (val.charAt(i) === 'e') {
      count ++;
    }
  }
  return count;
})