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
    function correctionFactor(number) {
      if (number >= 1) { return 1; }
      let exponent = (Math.floor(Math.log(number) / Math.log(10))) * -1;
      return Math.pow(10, exponent);
    }

    let cf;
    let cfa;
    let cfb;

    if ((a < 1) || (b < 1)) {
      let cfa = correctionFactor(a);
      let cfb = correctionFactor(b);
      let cf = (cfa > cfb) ? cfa : cfb;

      return ((a * cf) * (b * cf)) / Math.pow(cf, 2);
    } else {
      return a * b;
    }
  }
};
