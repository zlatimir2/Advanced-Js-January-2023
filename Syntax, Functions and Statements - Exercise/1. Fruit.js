function solve(fruit, grams, price) {
  let fruitInKg = grams / 1000;
  console.log(`I need $${(price * fruitInKg).toFixed(2)} to buy ${fruitInKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)