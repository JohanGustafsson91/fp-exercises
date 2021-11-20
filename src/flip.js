export const flip = (fn) => {
  return function takeArgs(...args) {
    const [first, second, ...rest] = args;
    return fn(...[second, first, ...rest]);
  };
};
