function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let resultDiv = document.getElementById('result');

    let result = firstNumber - secondNumber;

    resultDiv.innerHTML = `${result}`;
}