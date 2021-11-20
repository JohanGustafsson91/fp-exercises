export const take = (length, list) =>
  list.reduce((acc, curr) => (acc.length < length ? [...acc, curr] : acc), []);

export const range = (length) => Array.from({ length }, (_, i) => i);
