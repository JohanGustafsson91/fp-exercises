const {
  calculateSumOfNumbersInList,
  calculateDepthOfList,
  findLargestValueInList,
} = require("./recursion");

test(calculateSumOfNumbersInList.name, () => {
  const input = [1, [2], [[3]], 4, [[[[[[5]]]]]]];
  expect(calculateSumOfNumbersInList(input)).toBe(15);
  expect(calculateSumOfNumbersInList(input.reverse())).toBe(15);
});

test(calculateDepthOfList.name, () => {
  const input = [1, [2], [[3]], [[[[4]]]], 6];
  expect(calculateDepthOfList(input)).toBe(4);
  expect(calculateDepthOfList(input.reverse())).toBe(4);
});

test(findLargestValueInList.name, () => {
  const input = [1, [2], [[3]], [[[[7]]]], 6];
  expect(findLargestValueInList(input)).toBe(7);
  expect(findLargestValueInList(input.reverse())).toBe(7);
});
