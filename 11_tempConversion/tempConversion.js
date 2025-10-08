const convertToCelsius = function(inF) {
  return +((inF - 32) / (9/5)).toFixed(1);
};

const convertToFahrenheit = function(inC) {
  return +(inC * 9/5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
