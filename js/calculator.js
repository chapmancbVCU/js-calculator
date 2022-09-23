/******************************************************************************
 *         Name: calculator.js
 *       Author: Chad Chapman
 * Date Created: September 21, 2022
 *  Description: Implementation for calculator.
******************************************************************************/

// Setup event listener for button click.
const buttonSelect = document.querySelectorAll('button');
buttonSelect.forEach(button => button.addEventListener('click', function() {
    const value = this.getAttribute('value');
    document.getElementById('output').innerHTML = value;
}));

