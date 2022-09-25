/******************************************************************************
 *         Name: calculator.js
 *       Author: Chad Chapman
 * Date Created: September 21, 2022
 *  Description: Implementation for calculator.
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
let outputString = "0";
let number1 = "";
let answer = "";
let isNegative = false;
const positiveNumBtnSelect = document.querySelectorAll('[id^="number-"]');
const zeroBtnSelect = document.querySelector('#num-0-button');
const acBtnSelect = document.querySelector('#ac-op-button');
const changeSignBtnSelect = document.querySelector('#change-sign-button');
const decimalBtnSelect = document.querySelector('#decimal-place-button');


/******************************************************************************
 *        Name: acBtnSelect Event Listener
 * Description: Listens for input from the AC button.  Sets output to 0.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
 acBtnSelect.addEventListener('click', function() {
    outputString = "0";   
    isNegative = false; 
    document.getElementById('output').innerHTML = outputString;
});


/******************************************************************************
 *        Name: changeSignBtn Event Listener
 * Description: Listens for input from +/- button and updates output.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
changeSignBtnSelect.addEventListener('click', function() {
    if(outputString != "0" && outputString != 0) {
        let temp = -1 * parseFloat(outputString);
        outputString = temp.toString();
        isNegative = !isNegative;
        document.getElementById('output').innerHTML = outputString;
        console.log(`isNegative: ${isNegative}`)
    }
});



/******************************************************************************
 *        Name: decimalBtnSelect Even Listener
 * Description: Checks for input from decimal button and updates display.  If
 *              display is 0 then output becomes "0.".
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
decimalBtnSelect.addEventListener('click', function() {
    if(!outputString.includes('.')) {
        // Limit size of operand to 9 digits.
        if(outputString == "" || outputString == "0") {
            outputString = "0."
        } else if(outputString.length < 9 && isNegative == false || 
                outputString.length < 10 && isNegative == true) {
            outputString = outputString + ".";    
        }
        document.getElementById('output').innerHTML = outputString;
    }
})


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
    if(outputString == "0") {
        outputString = newValue;
    } else if(outputString.length < 9 && isNegative == false || 
            outputString.length < 10 && isNegative == true) {
        outputString += newValue;    
    }
    document.getElementById('output').innerHTML = outputString;
}));


/******************************************************************************
 *        Name: zeroNumBtnSelect Event Listener
 * Description: Listens for input from the number 0 button.  When no non-zero
 *              number is selected the display prints 0.
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/
 zeroBtnSelect.addEventListener('click', function() {
    let newValue = this.getAttribute('value');
    
    // Limit size of operand to 9 digits.
    if(outputString == "" || outputString == "0") {
        document.getElementById('output').innerHTML = 0;
    } else if(outputString.length < 9 && isNegative == false || 
            outputString.length < 10 && isNegative == true) {
        outputString += newValue;    
        document.getElementById('output').innerHTML = outputString;
    }
});









/******************************************************************************
 *        Name: 
 * Description: 
 *   Arguments: 
 *     Returns: 
 *****************************************************************************/