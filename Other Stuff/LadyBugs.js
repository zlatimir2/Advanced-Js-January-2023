function solve(...params) {
  let array = [];
  let arrLength = params.shift();
  let bugs = params.shift().split(' ');
  let line = params.shift().split(' ');

  for (let i = 0; i < arrLength; i++) {

    array.push(0);
  }
  for (let i = 0; i < bugs.length; i++) {
    let position = Number(bugs[i])
    if (position > array.length) {
      continue
    }
    array[position] = 1;
  }
  console.log(array);


}
solve(3,
  '0 1',
  '0 right 1',
  '2 right 1',
  'end'
)