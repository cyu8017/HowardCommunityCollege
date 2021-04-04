/*
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> HTML Forms
 */

// Turn on Strict Mode.
"use strict";

/* 
 * Function Name: processForm()
 * Function Purpose: 
 * -> Use the following function, processForm, as the event handler
 * -> for the button element with the id dispVals you will add to the
 * -> form. Add the program code to display the firstname, lastname, 
 * -> and email to the output element defined in the fucntion.
 */
const processForm = () => {

    const output = document.getElementById("outputEl");

    /*
     * Use document.getElementById and the value property of the three 
     * input elements to get the values from the form.
     */
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("emailAddress").value;

    /* 
     * Display the three values below the form. 
     * Use the following format: 
     * -> The firstname and lastname combined on one line. 
     * -> the email address on a new line after the firstname and lastname. 
     */
    output.innerHTML = firstName + " " + lastName + "<br><br>";
    output.innerHTML += email;
    
} // End processForm()

/* 
 * Function Name: init()
 * Function Purpose: 
 * -> Use the init function below to add a click event handler to the 
 * -> form button with the id of dispVals. 
 * -> Use the processForm function as the event handler function.
 */
const init = () => document.getElementById("dispVals").onclick = processForm;
// End init();

// Set the window onload event to use the init function handler.
window.onload = init;  