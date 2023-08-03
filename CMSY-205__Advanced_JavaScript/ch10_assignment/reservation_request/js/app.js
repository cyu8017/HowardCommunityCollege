/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 10 Problem 1: Form Validation
 * -> Use JavaScript to validate a reservation request form.
 */

// Turn on strict mode.
"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // add the span element after each text box.
    $(":text").after("<span class='error'>*</span>");

    // set the initial focus to the arrival date text box.
    $("#arrival_date").focus();

    // Reservation form submission event handler
    $("#reservation_form").submit((event) => {
        let isValid = true;

        // validate arrival date
        if ($("#arrival_date").val() == "") {
            $("#arrival_date").next().text("This field is required.");
            isValid = false;
        } else {
            $("arrival_date").next().text("");
        }

        // validate number of nights
        let nights = $("#nights").val();

        if (nights == "") {
            $("#nights").next().text("This field is required.");
            isValid = false;
        } else if (isNaN(nights)) {
            $("#nights").next().text("This field must be numeric.");
            isValid = false;
        } else {
            $("#nights").next().text("");
        }

        // validate name 
        let name = $("#name").val().trim();

        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").val(name);
            $("#name").next().text("");
        }

        // validate email address
        let email = $("#email").val();

        if (email == "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        // validate phone number
        if ($("#phone").val() == "") {
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }

        // Prevent invalid entries from being submitted
        if (isValid == false) {
            event.preventDefault();
        }
    });
}); // End ()