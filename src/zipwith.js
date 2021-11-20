import { zip } from "./zip";

export const zipwith = (fn, ...lists) => {
  return zip(...lists).reduce(
    (previousList, currentList) => [...previousList, fn(...currentList)],
    []
  );
};
