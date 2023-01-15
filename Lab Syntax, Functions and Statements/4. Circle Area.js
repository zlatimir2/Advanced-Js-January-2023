function solve(input) {
  let inputType = typeof (input)

  if (inputType != 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
  } else {
    console.log((Math.pow(input, 2) * Math.PI).toFixed(2));
  }

}
solve(5);
solve('name');