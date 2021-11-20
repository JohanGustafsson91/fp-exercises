// Not sure I understood the exercise

import { clist } from "./clist";

export const cons = (a, b) => {
  return function pair() {
    return clist(a, b);
  };
};

export const car = (pairFn) => {
  const [first] = pairFn();
  return first;
};

export const cdr = (pairFn) => {
  const [last] = pairFn().reverse();
  return last;
};
