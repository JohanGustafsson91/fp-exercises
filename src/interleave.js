import { compose, flatten, zip } from ".";
import { collectArgs, spreadArgs, valueToArray } from "./utils";

const splitToArray = (list) => list.map(valueToArray);

export const interleave = compose(
  flatten,
  spreadArgs(zip),
  collectArgs(splitToArray)
);
