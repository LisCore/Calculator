const calculations = document.querySelector(".calculation");
let currentNum = "";
let prevNum = "";
let operation = null;
document.querySelectorAll(".one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero").forEach(digit => {
    digit.addEventListener("click", () => handleDigitClick(digit.textContent.trim()));
});
function handleDigitClick(digit) {
    if (calculations.textContent === '0' || operation) {
        calculations.textContent = digit;
        if (operation) {
            currentNum = digit;
        }
        else {
            prevNum = digit;
        }
    }
    else {
        calculations.textContent += digit;
        if (operation) {
            currentNum += digit;
        }
        else {
            prevNum += digit;
        }
    }
}

document.querySelectorAll(".divide, .add, .minus, .multiply").forEach(button => {
    button.addEventListener("click", () => checkOperator(button));
});

function checkOperator(clickedOperator) {
    if (!prevNum) return;
    operation = clickedOperator.classList[0];
    console.log(operation);

    document.querySelectorAll(".divide, .add, .minus, .multiply").forEach(op => {
        op.style.border = "";
    });
    document.querySelector("." + operation).style.border = "1px solid red";
}

document.querySelector(".reset").addEventListener("click", () => {
    calculations.textContent = "";
    currentNum = "";
    prevNum = "";
    console.log(operation);
    document.querySelectorAll(".minus, .divide, .add, .multiply").forEach(temp => {
        temp.style.border = "1px solid black";
    });
    operation = null;
})

document.querySelector(".equal").addEventListener("click", () => {
    if (!prevNum || !calculations.textContent || !operation) return;

    let result;
    const current = parseFloat(calculations.textContent);
    const previous = parseFloat(prevNum);

    switch (operation) {
        case 'add': result = previous + current; break;
        case 'minus': result = previous - current; break;
        case 'multiply': result = previous * current; break;
        case 'divide': result = previous / current; break;
    }
    calculations.textContent = result;
    prevNum = result;
    currentNum = "";
    operation = null;
});
