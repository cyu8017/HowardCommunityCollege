/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 9 Problem 1: Show/Hide Link Content
 * -> Modify an application that contains links that let you jump to 
 * -> placeholders so only the text associated with the current
 * -> placeholder is displayed. 
 */

// Turn on Strict Mode
"use strict";

/*
 * Function Name: toobin()
 * Function Purpose: 
 * -> Show content associated with the toobin tab.
 * -> Hide all other content.
 */
const toobin = () => {
    $('#toobin, article:eq(0)').show();  // Show
    $('#sorkin, article:eq(3)').hide();  // Hide
    $('#chua, article:eq(2)').hide();    // Hide
    $('#sampson, article:eq(1)').hide(); // Hide
} // End toobin()

/* 
 * Function Name: sorkin()
 * Function Purpose: 
 * -> Show content associated with sorkin tab.
 * -> Hide all other content.
 */
const sorkin = () => {
    $('#toobin, article:eq(0)').hide();  // Hide
    $('#sorkin, article:eq(3)').show();  // Show 
    $('#chua, article:eq(2)').hide();    // Hide
    $('#sampson, article:eq(1)').hide(); // Hide
} // End sorkin()

/*
 * Function Name: chua()
 * Function Purpose:
 * -> Show content associated with chua tab.
 * -> Hide all other content.
 */
const chua = () => {
    $('#toobin, article:eq(0)').hide();  // Hide
    $('#sorkin, article:eq(3)').hide();  // Hide
    $('#chua, article:eq(2)').show();    // Show
    $('#sampson, article:eq(1)').hide(); // Hide
} // End chua()

/* 
 * Function Name: sampson()
 * Function Purpose: 
 * -> Show content associated with sampson tab.
 * -> Hide all other content.
 */
const sampson = () => {
    $('#toobin, article:eq(0)').hide();  // Hide
    $('#sorkin, article:eq(3)').hide();  // Hide
    $('#chua, article:eq(2)').hide();    // Hide
    $('#sampson, article:eq(1)').show(); // Show
} // End sampson()

/* 
 * Function Name: ()
 * Function Purpose: 
 * -> When document is ready load the tabs. 
 * -> Show content within toobin tab first. Hide the rest.
 */
$(document).ready(() => {

    $('#toobin, article:eq(0)').show();   // Document Onload Show
    $('#sorkin, article:eq(3)').hide();   // Document Onload Hide
    $('#chua, article:eq(2)').hide();     // Document Onload Hide
    $('#sampson, article:eq(1)').hide();  // Document Onload Hide

    $('aside a').click((evt) => {

        const $elem = $(this);

        $elem.is("[href^='#toobin']") ? toobin()
            : $elem.is("[href^='#sorkin']") ? sorkin()
                : $elem.is("[href^='#chua']") ? chua()
                    : $elem.is("[href^='#sampson']") ? sampson()
                        : null

        evt.preventDefault();

    });

}); // End ()