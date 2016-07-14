exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let allFiles = [];

    function record(_data) {
      for (let i = 0; i < _data.files.length; i++) {
        if (typeof _data.files[i] === 'string') {
          allFiles.push(_data.files[i]);
        } else {
          record(_data.files[i]);
        }
      }
    }

    function skip(_data) {
      for (let i = 0; i < _data.files.length; i++) {
        if (typeof _data.files[i] === 'string') {
          continue;
        } else if (_data.files[i].dir === dirName) {
          record(_data.files[i]);
        } else {
          skip(_data.files[i]);
        }
      }
    }

    if (!dirName || (data.dir === dirName)) {
      record(data);
    } else {
      skip(data);
    }

    return allFiles;
  },

  permute: function(arr) {
    let permutation;
    let permutations = [];

    for (let i = 0; i < arr.length; i++) {
      let head = arr.splice(i, 1);
      let tails = this.permute(arr);

      if (tails.length <= 0) {
        permutations.push(head);
      } else {
        for (let j = 0; j < tails.length; j++) {
          permutation = Array.prototype.concat.apply(head, tails[j]);
          permutations.push(permutation);
        }
      }

      arr.splice(i, 0, head[0]);
    }

    return permutations;
  },

  fibonacci: function(n) {
    let current = null;
    let last1 = 0;
    let last2 = 1;

    function fib(m) {
      if (m <= 1) { return current; }
      current = last1 + last2;
      last1 = last2;
      last2 = current;
      return fib(m - 1);
    }

    return fib(n);
  },

  validParentheses: function(n) {

  }
};
