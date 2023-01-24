function solve(array, step) {
  let resultArr = []
  for (let i = 0; i < array.length; i += step) {
    resultArr.push(array[i])
  }
  console.log(resultArr.join("\n"));
}
solve(['5',

  '20',

  '31',

  '4',

  '20'],

  2)