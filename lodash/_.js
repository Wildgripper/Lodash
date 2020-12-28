const _ = {
  clamp(number, lower, upper) {
      number = Math.max(number, lower);
      number = Math.min(number, upper);
      return number;
  },
  
};

// console.log(_.clamp(5, 2, 4));

// Do not write or modify code below this line.
module.exports = _;
