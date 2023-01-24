function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;
    console.log(operator);


    const result = 0;


    switch (operator) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
        default:
            document.getElementById('final').value = 'Invalid operator';
            break;
    }



    document.getElementById('final').value = result
}
