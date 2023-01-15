function solve(firstNum, secondNum, operator) {
  switch (operator) {
    case '+': console.log(firstNum + secondNum);
      break;
    case '-': console.log(firstNum - secondNum);
      break;
    case '*': console.log(firstNum * secondNum);
      break;
    case '/': console.log(firstNum / secondNum);
      break;
    case '%': console.log(firstNum % secondNum);
      break;
    case '**': console.log(firstNum ** secondNum);
      break;
  }
}
solve(5, 6, '+');
solve(3, 5.5, '*');