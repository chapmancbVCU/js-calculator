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

// Setup event listener for button click.
const buttonSelect = document.querySelectorAll('button');
buttonSelect.forEach(button => button.addEventListener('click', function() {
    let newValue = this.getAttribute('value');
    console.log(`value: ${value}`);
    value += newValue;
    document.getElementById('output').innerHTML = value;
}));

