const { add, sub } = require("./add-sub");

test(add.name, () => {
  expect(add(1, 2, 3)).toEqual(6);
});

test(sub.name, () => {
  expect(sub(5, 1, 2)).toEqual(2);
  expect(sub(5)).toEqual(-5);
  expect(sub(-5)).toEqual(5);
});
