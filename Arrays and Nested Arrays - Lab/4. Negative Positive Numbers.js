function solve(array) {
  let resultArr = [];
  for (const num of array) {
    if (num < 0) {
      resultArr.unshift(num)
    } else {
      resultArr.push(num)
    }
  }
  console.log(resultArr.join('\n'));
}