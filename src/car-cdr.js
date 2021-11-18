// Not sure I understood the exercise

import { clist } from "./clist";

export function cons(a, b) {
  return function pair() {
    return clist(a, b);
  };
}

export function car(pairFn) {
  const [first] = pairFn();
  return first;
}

export function cdr(pairFn) {
  const [last] = pairFn().reverse();
  return last;
}
