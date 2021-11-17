function add(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function sub(...[first, ...rest]) {
  return rest.length
    ? rest.reduce((acc, curr) => acc - curr, first)
    : first * -1;
}

module.exports = {
  add,
  sub,
  negate: sub, // TODO add unary
};
