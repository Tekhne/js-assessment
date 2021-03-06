exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj, arguments);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let result = [];

    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result.push(prop + ': ' + obj[prop]);
      }
    }

    return result;
  }
};
