const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  if (array.length == 0) {
    return 0;
  }
  let startSum = 0;
  let reducedSum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    startSum,
  );
  return reducedSum;
};

const multiply = function(array) {
  if (array.length == 0) {
    console.log("if true");
    return 0;
  }
  let multipliedSum = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  console.log(multipliedSum);
  return multipliedSum;
};


const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a < 0) return -1;
  else if (a == 0) return 1;
  else {
    return (a * factorial(a - 1));
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
