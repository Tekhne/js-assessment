exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let deferred = $.Deferred();
    setTimeout(() => { deferred.resolve(value) }, 1);
    return deferred.promise();
  },

  manipulateRemoteData: function(url) {

  }
};
