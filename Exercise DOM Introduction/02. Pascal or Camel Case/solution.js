function solve() {
  let inputText = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let output = document.getElementById('result');

  const toPascal = (Text) => Text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('')

  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1)
  }

  if (convention === 'Pascal Case') {
    output.textContent = toPascal(inputText);
  } else if (convention == 'Camel Case') {
    output.textContent = toCamelCase(inputText);
  } else {
    output.textContent = 'Error!'
  }

}