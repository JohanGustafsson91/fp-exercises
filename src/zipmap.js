export const zipmap = (...lists) => {
  const [firstList, secondList] = lists;

  return firstList.reduce(
    (previousMap, currentItem, index) => ({
      ...previousMap,
      [currentItem]: secondList[index],
    }),
    {}
  );
};
