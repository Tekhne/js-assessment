exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accumulator, value) => { return accumulator + value}, 0);
  },

  remove: function(arr, item) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        j--;
      }
    }

    return arr;
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
