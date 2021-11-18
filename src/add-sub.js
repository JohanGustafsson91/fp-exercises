export function add(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function sub(...[first, ...rest]) {
  return rest.length
    ? rest.reduce((acc, curr) => acc - curr, first)
    : first * -1;
}

// TODO guard with unary()
export const negate = sub;
