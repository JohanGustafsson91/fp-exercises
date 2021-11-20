import { compose } from ".";
import { spreadArgs } from "./utils";

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

const reverseArgs = (...argsArr) => argsArr.reverse();
export const flips = (fn) => compose(spreadArgs(fn), reverseArgs);
