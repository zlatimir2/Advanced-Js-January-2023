function solve(input) {
  let regex = /\w+/g;
  console.log(input.match(regex).join(', ').toUpperCase());
}
solve('Hi, how are you?');