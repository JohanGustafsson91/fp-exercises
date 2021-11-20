export const drop = (length, list) =>
  list.reduce((acc, curr, i) => (i >= length ? [...acc, curr] : acc), []);
