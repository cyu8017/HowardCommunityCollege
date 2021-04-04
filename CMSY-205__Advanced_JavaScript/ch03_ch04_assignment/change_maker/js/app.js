/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date:
 * Document Description:
 * -> Homework Assignment - Chapter 3 Problem 2: Develop Change Calculator
 * -> Develop an application that informs the user how many quarters, dimes,
 * -> nickels, and pennies needed to make change for any amount of change
 * -> from 0 through 99 cents.
 */

// Turn on Strict Mode
"use strict";

/* 
 * Function Name: $
 * Function Purpose: 
 * -> Return output to HTML document with element of id. 
 */
const $ = (id) => document.getElementById(id)
// End $().

/* 
 * Function Name: make_change()
 * Function Purpose:
 * -> Obtain total value and convert it to an integer.
 * -> Calculate for Quarters, Dimes, Nickels, and Pennies.
 * -> Print change output to HTML document.
 */
const make_change = () => {

    let total = parseInt(document.getElementById("cents").value);

    if (total !== total) return;

    // Quarters Calculation
    let quarters = Math.floor(total / 25);
    total -= quarters * 25;

    // Dimes Calculation
    let dimes = Math.floor(total / 10);
    total -= dimes * 10;

    // Nickels Calculation
    let nickels = Math.floor(total / 5);
    total -= nickels * 5;

    // Pennies Calculation
    let pennies = total;
    total -= pennies;

    // Print Output to HTML Page
    document.getElementById("quarters").value = quarters;
    document.getElementById("dimes").value = dimes;
    document.getElementById("nickels").value = nickels;
    document.getElementById("pennies").value = pennies;

} // End make_change().

/*
 * Document Window onload.
 * Apply action listeners to buttons.
 */
window.onload = () => $("calculate").onclick = make_change;
// End Window onload.