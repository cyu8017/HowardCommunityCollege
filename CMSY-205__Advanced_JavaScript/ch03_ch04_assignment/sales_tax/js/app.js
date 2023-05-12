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

const app = () => {
    'use strict'

    /**
     * @name $
     * @desc Money in form of change.
     * @param {*} id 
     * @returns Change value.
     */
    const $ = (id) => document.getElementById(id)

    /**
     * @name calculateClick
     * @desc Obtain the user's input value and convert the input to a integer value.
     * @desc Calculate subtotal and tax rate to obtain a total value.
     * @desc Validate the user's entry to obtain the subtotal value.
     * @desc Print an error message when the entry value is invalid.
     * @desc Print total value rounded to the nearest two digits.
     */
    const calculateClick = () => {
        const subtotal = parseFloat($('subtotal').value)
        const taxRate = parseFloat($('tax_rate').value)

        // Set the following text fields to empty
        $('sales_tax').value = ''
        $('total').value = ''

        // Check validation of the inputs.
        if (taxRate <= 0 || taxRate >= 12) {
            alert("Must be a positive number less than 12.")
        } else if (subtotal <= 0 || subtotal >= 10000) {
            alert("Must be a positive number less than $10,000.")
        } else {
            // Perform calculation to find Sales Tax and Total 
            let sales_tax = subtotal * (taxRate / 100)
            sales_tax = parseFloat(sales_tax.toFixed(2))
            let total = subtotal + sales_tax

            // Display results
            document.getElementById("sales_tax").value = sales_tax
            document.getElementById("total").value = total.toFixed(2)
        }
    }

    /**
     * @name clearClick
     * @desc Listen for the user to click the clear button.
     * @desc Clear values and set to empty.
     */
    const clearClick = () => {
        $("subtotal").value = ""
        $("tax_rate").value = ""
        $("sales_tax").value = ""
        $("total").value = ""
    }

    /**
     * Document window onload.
     * Apply action listeners to buttons.
     */
    window.onload = () => {
        $('calculate').onclick = calculateClick
        $('clear').onclick = clearClick
    }
}

app()
