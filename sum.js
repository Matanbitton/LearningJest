const sum = (a, b) => {
  return a + b;
};

const capitalize = (str) => {
  const temp = str[0].toUpperCase() + str.substring(1);
  return temp;
};

const reverseString = (str) => {
  let reverseString = "";

  for (let i = str.length; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
};

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function ceasersCipher(str, shiftNum) {
  str = str.toLowerCase();
  let abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let finalStr = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (abc.includes(temp)) {
      let placeInArr = abc.indexOf(temp) + shiftNum;
      if (placeInArr >= abc.length) {
        placeInArr = placeInArr % 26;
      }
      finalStr += abc[placeInArr];
    } else {
      finalStr += temp;
    }
  }

  return finalStr;
}

// this exports the function to the test

module.exports = { ceasersCipher, calculator, sum, capitalize, reverseString };
