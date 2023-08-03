/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 7 Problem 2: Expand/Collapse Application.
 * -> Develop an application that displays the first paragraph of text for 
 * -> three topics and then lets the user click a link to expand or collapse 
 * -> the text for each topic.
 */

/* 
 * Function Name: ()
 * Function Purpose: 
 * -> Expand/Collapse Paragraphs on click.
 */
$(document).ready(() => {
    $("#jdom a").click(() => {
        $(this).prev("div").toggle();
        $(this).prev("div").is(":visible")
            ? $(this).text("Show less")
            : $(this).text("Show more")
    })
})