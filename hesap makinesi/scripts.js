let currentNumber = '';
let previousNumber = '';
let operator = '';
let reset = false; // Yeni sayı girilirse ekranı sıfırlamak için

function appendNumber(number) {
    if (reset) {
        currentNumber = ''; // Sonuç gösterildikten sonra yeni giriş için ekran sıfırlanır
        reset = false;
    }
    currentNumber += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculate();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    reset = false;
    updateDisplay(); // Operatörü de ekranda göster
}

function calculate() {
    if (currentNumber === '' || previousNumber === '' || operator === '') return;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }

    currentNumber = result.toString().includes('.') ? result.toFixed(2) : result.toString();
    operator = '';
    previousNumber = '';
    reset = true; // Sonuç gösterildi, bir sonraki giriş için ekran sıfırlanacak
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    reset = false;
    updateDisplay();
}

function updateDisplay() {
    // Ekranda önce önceki sayı, ardından operatör ve mevcut sayı gösterilir
    const displayValue = previousNumber + (operator ? ' ' + operator + ' ' : '') + currentNumber;
    document.getElementById('display').value = displayValue;
}
