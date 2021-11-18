const { clist } = require("./clist");

// Not sure I understood the exercise

function cons(a, b) {
  return function pair() {
    return clist(a, b);
  };
}

function car(pairFn) {
  const [first] = pairFn();
  return first;
}

function cdr(pairFn) {
  const [last] = pairFn().reverse();
  return last;
}

module.exports = {
  cons,
  car,
  cdr,
};
