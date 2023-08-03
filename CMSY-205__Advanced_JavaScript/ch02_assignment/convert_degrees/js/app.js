/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date:
 * Document Description:
 * -> Homework Assignment Chapter 2 - Problem 2: Calculate Income Tax.
 * -> Change temperature input from Fahrenheit to Celsius.
 */

// Turn on strict mode. 
"use strict"

const app = () => {
    window.onload  = () => {
        do {
            let entry = parseInt(prompt("Enter degrees in Fahrenheit" + "\n" + "or enter 999 to end entries.", 999))
            let convertToCelsius = (entry - 32) * (5/9)
            alert ("Fahrenheit is " + empty + " degrees " + "\n" + "Celsius is " + convertToCelsius + " degrees.")
        }
        while (entry != 999)
    }
}

app()