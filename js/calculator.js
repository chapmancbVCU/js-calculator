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
const positiveNumBtnSelect = document.querySelectorAll('[id^="number-"]');
const zeroNumBtnSelect = document.querySelector('#num-0-button');


/******************************************************************************
 *        Name: positiveNumBtnSelect Event Listener
 * Description: Listens for input to buttons that are positive integers.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
positiveNumBtnSelect.forEach(button => button.addEventListener('click', 
    function() {
    let newValue = this.getAttribute('value');
    
    // Limite size of operand to 9 digits.
    if(outputString.length < 9) {
        outputString += newValue;    
        document.getElementById('output').innerHTML = outputString;
    }
}));


/******************************************************************************
 *        Name: zeroNumBtnSelect Event Listener
 * Description: Listens for input from the number 0 button.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
 zeroNumBtnSelect.addEventListener('click', function() {
    let newValue = this.getAttribute('value');
    
    // Limite size of operand to 9 digits.
    if(outputString == "" || outputString == "0") {
        document.getElementById('output').innerHTML = 0;
    } else if(outputString.length < 9) {
        outputString += newValue;    
        document.getElementById('output').innerHTML = outputString;
    }
});



function setPositiveOrNegative(currentValue, newValue) {
    if(currentValue[0] === "-") {
        return currentValue.substring(1, currentValue.length);
    }
    else {
        return "-" + currentValue;
    }
}




/******************************************************************************
 *        Name: 
 * Description: 
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/