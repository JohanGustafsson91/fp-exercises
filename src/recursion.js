export function calculateSumOfNumbersInList(list, sum = 0) {
  return list.reduce(
    (acc, curr) =>
      Array.isArray(curr)
        ? acc + calculateSumOfNumbersInList(curr, 0)
        : acc + curr,
    sum
  );
}

export function calculateDepthOfList(list, currentDepth = 0, deepestDepth = 0) {
  return list.reduce((previousDeepestDepth, currentElement) => {
    if (Array.isArray(currentElement)) {
      return calculateDepthOfList(
        currentElement,
        currentDepth + 1,
        previousDeepestDepth
      );
    }

    return currentDepth > previousDeepestDepth
      ? currentDepth
      : previousDeepestDepth;
  }, deepestDepth);
}

export function findLargestValueInList(list, largest = 0) {
  return list.reduce((previousLargest, currentValue) => {
    if (Array.isArray(currentValue)) {
      return findLargestValueInList(currentValue, previousLargest);
    }

    return currentValue > previousLargest ? currentValue : previousLargest;
  }, largest);
}
