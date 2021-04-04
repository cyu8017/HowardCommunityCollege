/* 
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 3 Problem 1: Sales Calculator Tax
 * -> Develop an application that calculates sales tax and invoice 
 * -> total.
 */

// Turn on Strict Mode
"use strict";

/*
 * Function Name: $
 * Function Purpose: 
 * -> Return output to HTML document with element of id.
 */
const $ = (id) => document.getElementById(id);
// End $().

/* 
 * Function Name: calculate_click()
 * Function Purpose: 
 * ->
 * -> Calculate subtotal and tax rate to obtain total.
 * -> Validate user entry for subtotal. 
 * -> Print error messages when entry is invalid.
 * -> Round total to nearest two digets.
 */
const calculate_click = () => {

    // Obtain user input and convert input to integer.
    const subtotal = parseFloat($("subtotal").value);
    const taxRate = parseFloat($("tax_rate").value);

    // Set the following text fields to empty
    $("sales_tax").value = "";
    $("total").value = "";

    // Check validation.
    if (taxRate <= 0 || taxRate >= 12) {
        alert("Must be a positive number less than 12.");
    } else if (subtotal <= 0 || subtotal >= 10000) {
        alert("Must be a positive number less than $10,000.");
    } else {
        // Perform calculation to find Sales Tax and Total 
        var sales_tax = subtotal * (taxRate / 100);
        sales_tax = parseFloat(sales_tax.toFixed(2));
        var total = subtotal + sales_tax;

        // Display results
        document.getElementById("sales_tax").value = sales_tax;
        document.getElementById("total").value = total.toFixed(2);
    }
} // End calculate_click().

/*
 * Function Name: clear_click()
 * Function Purpose: 
 * -> Listen for the user to click the clear button.
 * -> Clear subtotal value.
 * -> Clear tax_rate value.
 * -> Clear sales_tax value.
 * -> Clear total value.
 */
const clear_click = () => {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
} // End clear_click()

/*
 * Document Window onload.
 * Apply action listeners to buttons.
 */
window.onload = () => {
    $('calculate').onclick = calculate_click;
    $('clear').onclick = clear_click;
} // End Window onload.