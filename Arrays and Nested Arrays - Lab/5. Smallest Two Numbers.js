function solve(array) {
  let result = array.sort((a, b) => a - b).slice(0, 2);
  console.log(result);
}
solve([30, 15, 50, 5])