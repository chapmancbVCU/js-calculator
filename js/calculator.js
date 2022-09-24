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
const zeroBtnSelect = document.querySelector('#num-0-button');
const acBtnSelect = document.querySelector('#ac-op-button');


/******************************************************************************
 *        Name: positiveNumBtnSelect Event Listener
 * Description: Listens for input to buttons that are positive integers.  When
 *              input is detcted the ouput is updated to include new number.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
positiveNumBtnSelect.forEach(button => button.addEventListener('click', 
    function() {
    let newValue = this.getAttribute('value');
    
    /* Take care of case when there is a leading 0 after pressing AC button
       and limit size of operand to 9 digits. */
    if(outputString == 0) {
        outputString = newValue;
    } else if(outputString.length < 9) {
        outputString += newValue;    
    }
    document.getElementById('output').innerHTML = outputString;
}));


/******************************************************************************
 *        Name: zeroNumBtnSelect Event Listener
 * Description: Listens for input from the number 0 button.  When no number
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
 zeroBtnSelect.addEventListener('click', function() {
    let newValue = this.getAttribute('value');
    
    // Limit size of operand to 9 digits.
    if(outputString == "" || outputString == "0") {
        document.getElementById('output').innerHTML = 0;
    } else if(outputString.length < 9) {
        outputString += newValue;    
        document.getElementById('output').innerHTML = outputString;
    }
});



/******************************************************************************
 *        Name: acBtnSelect Event Listener
 * Description: Listens for input from the AC button.  Sets output to 0.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
 acBtnSelect.addEventListener('click', function() {
    outputString = "0";    
    document.getElementById('output').innerHTML = outputString;
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