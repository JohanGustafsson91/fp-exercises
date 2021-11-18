import { zip } from "./zip";

export function zipwith(fn, ...lists) {
  return zip(...lists).reduce((acc, curr) => [...acc, fn(...curr)], []);
}
