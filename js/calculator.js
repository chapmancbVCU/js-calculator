/******************************************************************************
 *         Name: calculator.js
 *       Author: Chad Chapman
 * Date Created: September 21, 2022
 *  Description: Implementation for calculator.
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
let outputString = "";
let firstOperand = "";
let secondOperand = "";
let isNegative = false;

// Setup event listener for button click.
const buttonSelect = document.querySelectorAll('.number');
buttonSelect.forEach(button => button.addEventListener('click', function() {
    let newValue = this.getAttribute('value');
    // Limite size of operand to 9 digits.
    if(outputString.length < 9) {
        outputString += newValue;    
        document.getElementById('output').innerHTML = outputString;
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
