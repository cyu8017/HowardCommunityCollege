/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 2 Problem 1: Calculate Income Tax
 * -> Use nested if statements and arithmetic expressions to calculate
 * -> the income tax that is owed for a taxable income amount.
 */

// Turn on Strict Mode. 
"use strict";

window.onload = () => {

    let taxOwed = 0;

    /*
     * Prompt the user to enter a taxable income and parse it as an integer.
     * Prompt the user to enter 99999 to quit the program
     */

    do {

        let entry = parseInt(prompt("Enter taxable income as a valid number\n" + "Or enter 99999 to end entries", 99999));

        /*
         * Apply 10% on taxable income from $0 - $8700.
         * Apply 15% on taxable income from $8700 - $35350. 
         * Apply 25% on taxable income from $35350 - $85650. 
         * Apply 28% on taxable income from $85650 - $178650.
         * Apply 33% on taxable income from $178650 - $388350. 
         * Apply 35% on taxable income from $388350 and above. 
         */

        entry > 0 && entry <= 8700 ? tax_owed = (entry - 0) * .10 + 0
            : entry > 8700 && entry <= 35350 ? tax_owed = (entry - 8700) * .15 + 870
                : entry > 35350 && entry <= 85650 ? tax_owed = (entry - 35350) * .25 + 4867
                    : entry > 856650 && entry <= 178650 ? tax_owed = (entry - 85650) * .28 + 17442
                        : entry > 178650 && entry <= 388350 ? tax_owed = (entry - 178650) * .33 + 43482
                            : entry > 388350 ? (entry - 388350) * .35 + 112683
                                : null

        // Alert message to inform user the tax owed. 
        alert("Tax owed is " + tax_owed);

    }

    while (entry != 99999);
    
}