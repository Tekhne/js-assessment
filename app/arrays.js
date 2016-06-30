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
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        cnt++;
      }
    }

    return cnt;
  },

  duplicates: function(arr) {
    let counts = {};
    let dups = [];

    for (let i = 0; i < arr.length; i++) {
      counts[arr[i]] = {
        count: counts[arr[i]] ? (counts[arr[i]].count + 1) : 1,
        value: arr[i] // Avoid string conversion with Object keys.
      }
    }

    for (let c in counts) {
      if (counts.hasOwnProperty(c) && (counts[c].count > 1)) {
        dups.push(counts[c].value);
      }
    }

    return dups;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
