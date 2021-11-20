export const partial = (fn, ...args) => {
  return function applyRestOfArgs(...restOfArgs) {
    return fn(...args, ...restOfArgs);
  };
};
