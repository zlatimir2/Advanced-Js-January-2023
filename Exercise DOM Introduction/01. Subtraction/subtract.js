function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    document.getElementById('result').textContent = Number(firstNumber) - Number(secondNum);
}