import { compose } from ".";

export const flip = (fn) => {
  return function takeArgs(...args) {
    const [first, second, ...rest] = args;
    return fn(...[second, first, ...rest]);
  };
};

// export const flips = (fn) => {
//   return function takeArgs(...args) {
//     return fn(...args.reverse());
//   };
// };

const spreadArgs = (fn) => {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  };
};

const reverseArgs = (...argsArr) => argsArr.reverse();
export const flips = (fn) => compose(spreadArgs(fn), reverseArgs);
