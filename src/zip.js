export const zip = (...lists) => {
  const [shortestList] = [...lists].sort((a, b) => a.length - b.length);

  return Array.from(shortestList, function map(_, zipIndex) {
    return lists.reduce(
      (previousList, currentList) => [...previousList, currentList[zipIndex]],
      []
    );
  });
};
