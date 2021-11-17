const { clist } = require("./clist");

test(clist.name, () => {
  expect(clist(1, 2, 3)).toEqual([1, 2, 3]);
  expect(clist({ one: 1 }, { two: 2 })).toEqual([{ one: 1 }, { two: 2 }]);
});
