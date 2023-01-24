function solve(array) {
  let finalArr = [array[0]]


  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      finalArr.push(array[i])
    }
  }
  return finalArr
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])