/*
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description:
 * -> Graded Assignment: Lab 1: Month and Season
 * -> Display all months and associated seasons.
 * -> Prompt the user to enter a number for the month. 
 * -> Show the month name, month number, and season.
 */

// Turn on Strict Mode.
"use strict";

/*
 * Prompt user to enter month number. i.e., month 0 = January,
 * month 1 = February and so on....
 * 
 * Press enter to print all months and their seasons.
 */
let month = parseInt(prompt("enter month number: ", "1"));
document.write("<strong>Seasons:</strong> <br><br>");

/*
 * While Loop: Iterate through the months. 
 * While Loop Purpose: 
 * -> Process the months within range of January - December
 */
while (month < 13) {

    /*
     * Iterate through the months of the year.
     * -> The iteration of January(1) and February(2)
     * -> Season = Winter.
     * 
     * -> The iteration of March(3), April(4), May(5)
     * -> Season = Spring.
     * 
     * -> The iteration of June(6), July(7), and August(8)
     * -> Season = Summer. 
     * 
     * -> The iteration of September(9), October(10), and November(11)
     * -> Season = Fall.
     * 
     * -> The iteration of December(12)
     * -> Season = Winter.
     */

    month < 3 ? document.write("Month " + month + " - Winter <br>")
        : month < 6 ? document.write("Month " + month + " - Spring <br>")
            : month < 9 ? document.write("Month " + month + " - Summer <br>")
                : month < 12 ? document.write("Month " + month + " - Fall <br>")
                    : document.write("Month " + month + " - Winter <br>");

    // Increment Month
    month = month + 1;

} // End while loop.