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
    return Array.prototype.slice.call(arguments).reduce(
      (acc, number) => { return acc + number;
      }, 0
    );
  },

  callIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
