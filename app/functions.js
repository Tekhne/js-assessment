exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return (str2) => { return str + ", " + str2; }
  },

  makeClosures: function(arr, fn) {
    return arr.map((item) => {
      return () => {
        return fn(item);
      }
    });
  },

  partial: function(fn, str1, str2) {
    return (str3) => {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
