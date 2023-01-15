function solve(month, year) {
  let now = new Date();


  now.setMonth(month);
  now.setYear(year);
  now.setDate(0)
  console.log(now.getDate());

}
solve(1, 2012)
solve(2, 2021)