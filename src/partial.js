function partial(fn, ...firstArgs) {
  return function applyRestOfArgs(...restOfArgs) {
    return fn(...firstArgs, ...restOfArgs);
  };
}

module.exports = {
  partial,
};
