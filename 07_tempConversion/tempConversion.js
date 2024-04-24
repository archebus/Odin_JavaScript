const convertToCelsius = function(num) {
  let converted = (num - 32) * 5 / 9;
  let rounded = Math.round(converted * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(num) {
  let converted = (num * 9 / 5) + 32;
  let rounded = Math.round(converted * 10) / 10;
  return rounded;
};

convertToCelsius(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
