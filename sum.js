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

// this exports the function to the test

module.exports = { sum, capitalize, reverseString };
