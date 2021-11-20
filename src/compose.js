export function compose(...functions) {
  return function callAllFunctions(...args) {
    return functions.reduceRight(function callFunction(acc, fn, i, values) {
      return i + 1 === values.length ? fn(...acc) : fn(acc);
    }, args);
  };
}
