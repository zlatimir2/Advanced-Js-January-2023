function solve(list) {
  let sortedArr = list.sort((a, b) => a.localeCompare(b))
  for (let i = 0; i < sortedArr.length; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}
solve(["John",

  "Bob",

  "Christina",

  "Ema"])