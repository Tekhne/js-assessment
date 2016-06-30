exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let deferred = $.Deferred();
    setTimeout(() => { deferred.resolve(value) }, 1);
    return deferred.promise();
  },

  manipulateRemoteData: function(url) {
    let deferred = $.Deferred();

    $.getJSON(url, (data) => {
      let names = data.people.reduce((acc, person) => {
        acc.push(person.name);
        return acc;
      }, []);

      deferred.resolve(names.sort());
    });

    return deferred.promise();
  }
};
