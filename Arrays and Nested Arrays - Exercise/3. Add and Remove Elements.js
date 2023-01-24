function solve(array) {
  let resultArr = [];
  let counter = 0;
  for (const line of array) {
    counter++
    if (line == 'add') {
      resultArr.push(counter);
    } else {
      resultArr.pop()
    }
  }
  if (resultArr.length < 1) {
    console.log('Empty');
  } else {
    console.log(resultArr.join('\n'));
  }
}
solve(['remove', 'remove', 'remove'])
