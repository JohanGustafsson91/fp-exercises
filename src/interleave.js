import { compose, flatten, zip } from ".";
import { collectArgs, spreadArgs } from "./utils";

const splitToArray = (list) =>
  list.map((sequence) =>
    Array.isArray(sequence) ? sequence : sequence.split("")
  );

export const interleave = compose(
  flatten,
  spreadArgs(zip),
  collectArgs(splitToArray)
);
