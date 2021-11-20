/**
 * Utils not defined by exercises.
 */

export const spreadArgs = (fn) => {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  };
};

export const collectArgs = (fn) => {
  return function collect(...args) {
    return fn(args);
  };
};
