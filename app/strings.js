exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let characters = str.split('');
    let count = 0;
    let result = [];

    if (amount < 1) {
      return '';
    }

    if (characters.length < 2) {
      return str;
    }

    for (let i = 0; i < characters.length; i++) {
      if (i === 0) {
        result = result.concat(characters[i]);
        count++;
      } else if (characters[i - 1] === characters[i]) {
        if (count < amount) {
          result = result.concat(characters[i]);
          count++;
        }
      } else {
        result = result.concat(characters[i]);
        count = 1;
      }
    }

    return result.join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
