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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
