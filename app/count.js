exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let current = start;

    let intervalID = setInterval(() => {
      if (current > end) { clearInterval(intervalID) }
      console.log(current++);
    }, 100);

    return { cancel: () => { clearInterval(intervalID) } };
  }
};
