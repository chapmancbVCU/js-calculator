/******************************************************************************
 *         Name: calculator.js
 *       Author: Chad Chapman
 * Date Created: September 21, 2022
 *  Description: Implementation for calculator.
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
let value = "";
let firstOperand = "";
let secondOperand = "";


// Setup event listener for button click.
const buttonSelect = document.querySelectorAll('button');
buttonSelect.forEach(button => button.addEventListener('click', function() {
    let newValue = this.getAttribute('value');
    console.log(`value: ${value}`);
    
    // Limite size of operand to 9 digits.
    if(value.length < 9) {
        if(newValue == "+/-") {
            value = setPositiveOrNegative(value, newValue);
            console.log(newValue);
        } else {
            value += newValue;
        }
        document.getElementById('output').innerHTML = value;
    }
}));

function setPositiveOrNegative(currentValue, newValue) {
    if(currentValue[0] === "-") {
        return currentValue.substring(1, currentValue.length);
    }
    else {
        return "-" + currentValue;
    }
}
