function zip(...lists) {
  const [shortestList] = [...lists].sort((a, b) => a.length - b.length);

  return Array.from(shortestList, function map(_, zipIndex) {
    return lists.reduce((acc, curr) => [...acc, curr[zipIndex]], []);
  });
}

module.exports = {
  zip,
};
