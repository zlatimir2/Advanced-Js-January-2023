function solve(...params) {
  let array = [];
  let arrLength = params.shift();
  let bugs = params.shift().split(' ');
  let line = params.shift().split(' ');

  for (let i = 0; i <= arrLength - 1; i++) {
    array[i] = 0;
  }



  console.log(array);



  while (line != 'end') {

    line = params.shift().split(' ');
  }


}
solve(3,
  '0 1',
  '0 right 1',
  '2 right 1',
  'end'
)