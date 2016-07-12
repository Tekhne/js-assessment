exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let allFiles = [];

    function recurse(_data) {
      for (let i = 0; i < _data.files.length; i++) {
        if (typeof _data.files[i] === 'string') {
          allFiles.push(_data.files[i]);
        } else {
          recurse(_data.files[i]);
        }
      }
    }

    recurse(data);
    return allFiles;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
