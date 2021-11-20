import {
  calculateSumOfNumbersInList,
  calculateDepthOfList,
  findLargestValueInList,
  clist,
  add,
  sub,
  negate,
  compose,
  zip,
  zipmap,
  zipwith,
  car,
  cons,
  cdr,
  partial,
  transpose,
  flip,
  flips,
  take,
  range,
  drop,
  flatten,
  interleave,
  everyPred,
} from ".";

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

test(transpose.name, () => {
  expect(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});

test(flip.name, () => {
  expect(flip(clist)(1, 2, 3)).toEqual([2, 1, 3]);
  expect(flip(sub)(10, 1)).toEqual(-9);
});

test(flips.name, () => {
  expect(flips(clist)(1, 2, 3)).toEqual([3, 2, 1]);
  expect(flips(sub)(1, 2, 3)).toEqual(0);
});

test(take.name, () => {
  expect(take(3, range(10))).toEqual([0, 1, 2]);
});

test(drop.name, () => {
  expect(drop(3, range(6))).toEqual([3, 4, 5]);
});

test(flatten.name, () => {
  expect(flatten([1, [2, [3, 4], [5, 6], 7], 8, [9, 10]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
});

test(interleave.name, () => {
  // expect(interleave([1, 2, 3], [10, 20, 30])).toEqual([1, 10, 2, 20, 3, 30]);
  expect(interleave([1, 2, 3], [10, 20, 30], "abc")).toEqual([
    1,
    10,
    "a",
    2,
    20,
    "b",
    3,
    30,
    "c",
  ]);
});

test(everyPred.name, () => {
  const positive = (val) => val > 0;
  const even = (val) => val % 2 === 0;
  expect(everyPred(positive, even)(8)).toEqual(true);
  expect(everyPred(positive, even)(7)).toEqual(false);
});
