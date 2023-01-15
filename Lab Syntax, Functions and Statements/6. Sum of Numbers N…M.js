function solve(startNum, endNum) {
  startNum = Number(startNum);
  endNum = Number(endNum);
  let sum = 0;

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  console.log(sum);

}
solve('1', '5')
