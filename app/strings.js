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
    let characters = str.split('');
    let line = 1;
    let queue = [];
    let result = [];

    for (let i = 0; i < characters.length; i++) {
      if (/\s/.test(characters[i])) {
        if (line > cols) {
          queue = queue.concat('\n');
          result = Array.prototype.concat.apply(result, queue);
          queue = [];
          line = 1;
        } else {
          queue = queue.concat(characters[i]);
          line++;
        }
      } else {
        if (line > cols) {
          for (let j = (queue.length - 1); j >= 0; j--) {
            if (/\s/.test(queue[j])) {
              queue[j] = '\n';
              break;
            }
          }
        }

        queue = queue.concat(characters[i]);
        line++;
      }
    }

    result = Array.prototype.concat.apply(result, queue);
    return result.join('');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
