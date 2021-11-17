const { add } = require("./add-sub");

function compose(...fns) {
  return function callFns(...args) {
    return fns
      .reverse()
      .reduce((acc, fn, i) => (i === 0 ? fn(...acc) : fn(acc)), args);
  };
}

module.exports = {
  compose,
};
