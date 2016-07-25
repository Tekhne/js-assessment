exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z])\1+/.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiouAEIOU]$/.test(str);
  },

  captureThreeNumbers: function(str) {
    let result = /(\d{3})/.exec(str);
    return result ? result[0] : false;
  },

  matchesPattern: function(str) {
    return /\b\d{3}-\d{3}-\d{4}\b/.test(str);
  },

  isUSD: function(str) {

  }
};
