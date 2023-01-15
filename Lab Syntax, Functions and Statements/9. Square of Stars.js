function solve(num) {
  for (i = 0; i < num; i++) {
    let row = ''
    for (j = 0; j < num; j++) {
      row += '* '
    }
    console.log(row);
  }
}
solve(5)