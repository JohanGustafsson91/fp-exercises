export function partial(fn, ...firstArgs) {
  return function applyRestOfArgs(...restOfArgs) {
    return fn(...firstArgs, ...restOfArgs);
  };
}
