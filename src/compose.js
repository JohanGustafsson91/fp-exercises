export const compose = (...functions) => {
  return function callAllFunctions(...args) {
    return functions.reduceRight(function callFunction(acc, fn, i) {
      return i + 1 === functions.length ? fn(...acc) : fn(acc);
    }, args);
  };
};

/**
 * With arrow functions
 */
// export const compose =
//   (...functions) =>
//   (...args) =>
//     functions.reduceRight(
//       (acc, fn, i) => (i + 1 === functions.length ? fn(...acc) : fn(acc)),
//       args
//     );
