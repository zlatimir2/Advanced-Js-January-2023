function solve(array) {
  let sortedArray = array.sort((a, b) => a - b)
  let sliced = sortedArray.slice(sortedArray.length / 2, Number.MAX_SAFE_INTEGER);
  return sliced;
}
solve([4, 7, 2, 5])