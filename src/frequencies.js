import { valueToArray } from "./utils";

export const frequencies = (input) => {
  return valueToArray(input).reduce(
    (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
    {}
  );
};
