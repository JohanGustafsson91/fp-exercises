const { zip } = require("./zip");

function zipwith(fn, ...lists) {
  return zip(...lists).reduce((acc, curr) => [...acc, fn(...curr)], []);
}

module.exports = {
  zipwith,
};
