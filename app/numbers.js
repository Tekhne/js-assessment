exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let binary = [];

    for (let i = 8; i > 0; i--) {
      binary.push(this.valueAtBit(num, i));
    }

    return binary.join('');
  },

  multiply: function(a, b) {

  }
};
