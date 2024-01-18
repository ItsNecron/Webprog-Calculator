let result = null;

function appendToDisplay(value, buttonClass) {
    console.log("Button Class:", buttonClass);
    let display = document.getElementById('display');

    if (display.value === 'Error' || (result !== null && buttonClass !== "operand")) {
        display.value = '';
        result = null;
    }

    display.value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}

function solve() {
    let display = document.getElementById('display');

    try {
        if (display.value.trim() === '') {
            display.value = '';
        } else {
            result = eval(display.value);
            if (isNaN(result) || !isFinite(result)) {
                display.value = 'Syntax Error';
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        display.value = 'Syntax Error';
    }
    result = null;
}