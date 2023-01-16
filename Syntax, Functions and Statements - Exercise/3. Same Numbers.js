function sameNum(number) {
  let numToString = number.toString()
  let isSame = true;
  let sum = 0;
  let firstLetter = numToString[0];
  for (let i = 0; i < numToString.length; i++) {
    if (numToString[i] !== firstLetter) {
      isSame = false
    }
    sum += Number(numToString[i]);
  }
  console.log(isSame);
  console.log(sum);
}
sameNum(2222222)