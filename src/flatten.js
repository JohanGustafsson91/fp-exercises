export const flatten = (list) => {
  return list.reduce(function flattenList(acc, curr) {
    return Array.isArray(curr)
      ? [...acc, ...curr.reduce(flattenList, [])]
      : [...acc, curr];
  }, []);
};
