const _ = {
  clamp(number, lower, upper) {
    number = Math.max(number, lower);
    number = Math.min(number, upper);
    return number;
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    return start <= number && number < end;
  },

  words(string) {
    return string.split(' ');
  },

  pad(string, number) {
    let pad = number - string.length;
    let startPad = Math.floor(pad / 2);
    let endPad = Math.ceil(pad / 2);
    string = string.padStart(startPad + string.length);
    string = string.padEnd(endPad + string.length);
    return string;
  },

  has(obj, key) {
    if (obj[key] === undefined) {
      return false;
    } else {
      return true;
    }
  },

  invert(obj) {
    const invertedObj = {};
    for (const key in obj) {
      invertedObj[obj[key]] = key;
    }
    return invertedObj;
  },

  findKey(obj, func) {
    for (const key in obj) {
      if (func(obj[key]) === true) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, number) {
    const newArray = [];
    if (number === undefined) {
      number = 1;
    }
    for (let index = 0; index < number; index++) {
      array.shift();
    }
    return array;
  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size) {
    if(size === undefined) {
      size = 1;
    }
    let arrayChunks = [];
    for(let index = 0; index < array.length; index + size) {
      let arrayChunk = array.slice(index, index + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }

};

// console.log(_.clamp(5, 2, 4));
// console.log(_.inRange(5, 10, 4));
// console.log(_.words('fred, barney, & pebbles'));
// console.log(_.pad('hi', 1));
// console.log(_.has(myobj, 'mykey'));
// console.log(_.invert(car));

// Do not write or modify code below this line.
module.exports = _;