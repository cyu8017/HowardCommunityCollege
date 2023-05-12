/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date:
 * Document Description:
 * -> Homework Assignment Chapter 2 - Problem 2: Calculate Income Tax.
 * -> Change temperature input from Fahrenheit to Celsius.
 */

const app = () => {
    'use strict'

    window.onload = () => {
        let entry

        do {
            entry = parseInt(prompt("Enter degrees in Fahrenheit" + "\n" + "or enter 999 to end entries." , 999))

            if (entry != 999) {
                const convertToCelsius = (entry - 32) * (5/9)
                alert("Fahrenheit is " + entry + " degrees " + "\n" + "Celsius is " + convertToCelsius + " degrees.")
            }
        } while (entry !== 999)
    }
}

app()