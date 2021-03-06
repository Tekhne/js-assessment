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
    let head = Array.prototype.slice.call(arguments, 1);

    return function () {
      let tail = Array.prototype.slice.call(arguments);
      let full = head.concat(tail);
      return fn.apply(null, full);
    }
  },

  curryIt: function(fn) {
    let args = [];

    wrapper = function (arg) {
      args.push(arg);
      return fn.apply(null, args);
    }

    for (let i = 0; i < (fn.length - 1); i++) {
      let oldWrapper = wrapper;

      wrapper = function (arg) {
        args.push(arg);
        return oldWrapper;
      }
    }

    return wrapper;
  }
};
