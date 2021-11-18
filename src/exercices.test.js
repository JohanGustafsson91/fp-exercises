const {
  calculateSumOfNumbersInList,
  calculateDepthOfList,
  findLargestValueInList,
} = require("./recursion");
const { clist } = require("./clist");
const { add, sub, negate } = require("./add-sub");
const { compose } = require("./compose");
const { zip } = require("./zip");
const { zipmap } = require("./zipmap");
const { zipwith } = require("./zipwith");
const { car, cons, cdr } = require("./car-cdr");
const { partial } = require("./partial");

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

test(clist.name, () => {
  expect(clist(1, 2, 3)).toEqual([1, 2, 3]);
  expect(clist({ one: 1 }, { two: 2 })).toEqual([{ one: 1 }, { two: 2 }]);
});

test(add.name, () => {
  expect(add(1, 2, 3)).toEqual(6);
});

test(sub.name, () => {
  expect(sub(5, 1, 2)).toEqual(2);
  expect(sub(5)).toEqual(-5);
  expect(sub(-5)).toEqual(5);
});

test(compose.name, () => {
  const double = (val) => val * 2;
  expect(compose(negate, double, add)(1, 2, 3)).toEqual(-12);
  expect(compose(clist, double, sub)(1, 2, 3)).toEqual([-8]);
});

test(zip.name, () => {
  expect(zip([1, 2, 3], [4, 5, 6])).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
  expect(zip([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
  expect(zip([1, 2, 3], [4, 5], [7])).toEqual([[1, 4, 7]]);
  expect(zip([1, 2, 3], [4, 5], [7, 8])).toEqual([
    [1, 4, 7],
    [2, 5, 8],
  ]);
});

test(zipmap.name, () => {
  expect(zipmap([1, 2, 3], [4, 5, 6])).toEqual({ 1: 4, 2: 5, 3: 6 });
});

test(zipwith.name, () => {
  expect(zipwith(add, [1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  expect(zipwith(add, [1, 2, 3], [4, 5, 6], [1, 1, 1])).toEqual([6, 8, 10]);
});

test(car.name, () => {
  expect(car(cons(3, 4))).toEqual(3);
});

test(cdr.name, () => {
  expect(cdr(cons(3, 4))).toEqual(4);
});

test(partial.name, () => {
  expect(partial(add, 1, 2)(3, 4)).toEqual(10);
  expect(partial(clist, 1, 2)(3, 4)).toEqual([1, 2, 3, 4]);
  expect(partial(sub, 10)(1, 2)).toEqual(7);
});
