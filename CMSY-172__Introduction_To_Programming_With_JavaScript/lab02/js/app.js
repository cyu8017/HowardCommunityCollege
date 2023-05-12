/*
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description:
 * -> Graded Assignment: Lab 2: Odd/Even Numbers
 * -> Create a program that checks if the user enters a
 * -> even or odd number.
 * -> Show the number entry and even/odd output.
 */

const app = () => {
    'use strict'

    /**
     * @function isOdd()
     * @desc Create a function that checks if a number is even or odd.
     * @desc Pass in the parameter called num. 
     * @desc Check the number is divisible by 2 and ends with 0.
     */
    const isOdd = (num) => {
        if (num % 2 === 0) {
            return false
        } else {
            return true
        }
    }

    /**
     * @name numToCheck()
     * @desc Prompt the user to enter an integer value.
     * @desc Saves the integer value to the numToCheck variable.
     * @desc ParseInt the user's entry by converting any decimal values into an integer value.
     */
    let numToCheck = parseInt(prompt("Enter an integer: "))

    /* 
     * Check to see if the user entered a integer. 
     * If the value that is entered is NaN, alert the user to enter a integer.
     * Else, call the isOdd function to check if the integer is even or odd.
     * Print the result to the HTML document.
     */
    if (isNaN(numToCheck)) {
        alert("Error: Your entry is not an integer.")
    } else {
        let result = isOdd(numToCheck)
        result === true 
            ? document.write("Your entry of " + numToCheck + " is odd.")
            : document.write("Your entry of " + numToCheck + " is even.")
    }
}

app()
