function zipmap(...lists) {
  const [firstList, secondList] = lists;

  return firstList.reduce(
    (acc, curr, i) => ({ ...acc, [curr]: secondList[i] }),
    {}
  );
}

module.exports = {
  zipmap,
};
