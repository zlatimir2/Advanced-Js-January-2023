function search() {
   let input = document.getElementById('searchText');
   let list = document.querySelectorAll('#towns li');

   let output = document.getElementById('result');

   let array = Array.from(list);
   let counter = 0

   array.forEach((town) => {
      if (town.textContent.includes(input.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
         counter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none'
      }
   })

   output.textContent = `${counter} matches found`

}
