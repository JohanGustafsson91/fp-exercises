import { compose } from "./compose";

export const add = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export const sub = (...[first, ...rest]) => {
  return rest.length
    ? rest.reduce((acc, curr) => acc - curr, first)
    : first * -1;
};

const unary = (...args) => {
  const [firstArg] = args;
  return firstArg;
};

export const negate = compose(sub, unary);
