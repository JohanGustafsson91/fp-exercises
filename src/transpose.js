import { zip } from ".";

export const transpose = (lists) => {
  return zip(...lists);
};
