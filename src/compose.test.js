const { add, sub, negate } = require("./add-sub");
const { clist } = require("./clist");
const { compose } = require("./compose");

test(compose.name, () => {
  expect(compose(negate, double, add)(1, 2, 3)).toEqual(-12);
  expect(compose(clist, double, sub)(1, 2, 3)).toEqual([-8]);
});

const double = (val) => val * 2;
