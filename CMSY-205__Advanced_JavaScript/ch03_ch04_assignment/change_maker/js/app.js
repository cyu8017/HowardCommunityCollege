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
     * @name makeChange
     * @desc Takes in value of money and calculates the total quarters, dimes, nickesl and pennies it can make.
     */
    const makeChange = () => {

        let total = parseInt(document.getElementById("cents").value)

        if (total !== total) return

        // Calculate quarters.
        let quarters = Math.floor(total / 25)
        total -= quarters * 25

        // Calculate dimes.
        let dimes = Math.floor(total / 10)
        total -= dimes * 10

        // Calculate nickels.
        let nickels = Math.floor(total / 5)
        total -= nickels * 5

        // Calculate pennies.
        let pennies = total
        total -= pennies

        // Maps values to HTML ID.
        document.getElementById("quarters").value = quarters
        document.getElementById("dimes").value = dimes
        document.getElementById("nickels").value = nickels
        document.getElementById("pennies").value = pennies
    }

    window.onload = () => $("calculate").onclick = makeChange
}

app()