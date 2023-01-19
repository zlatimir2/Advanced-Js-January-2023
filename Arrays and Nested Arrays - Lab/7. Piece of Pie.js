function solve(array, firstArg, secondArg) {
  let resultArr = [];
  let start = array.indexOf(firstArg);
  let end = array.indexOf(secondArg);
  for (let i = start; i <= end; i++) {
    resultArr.push(array[i]);
  }
  return resultArr;
}
solve(['Pumpkin Pie',

  'Key Lime Pie',

  'Cherry Pie',

  'Lemon Meringue Pie',

  'Sugar Cream Pie'],

  'Key Lime Pie',

  'Lemon Meringue Pie')