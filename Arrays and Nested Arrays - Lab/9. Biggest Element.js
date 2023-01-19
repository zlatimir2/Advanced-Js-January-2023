function solve(array) {
  let biggestNum = 0;
  for (const arr of array) {
    for (const num of arr) {
      if (biggestNum < num) {
        biggestNum = num;
      }
    }
  }
  return biggestNum;

}
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))