/*
 * Author: Charlie Yu 
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description:
 * -> Homework Assignment: Chapter 6 - Problem 1:  FAQs.
 * -> Create FAQ application.
 */

// Turn on Strict Mode.
"use strict";

/* 
 * Function Name: $
 * Function Purpose: 
 * -> Return output to HTML document with element of id.
 */
const $ = id => document.getElementById(id);
// End $().

/* 
 * Function Name: ()
 * Function Purpose:
 * -> Window onload. 
 * -> Load FAQ application function. 
 * -> When user clicks on a question, it will expand and show the answer.
 * -> When the user clicks another question, the previous will collapse, 
 * -> and current clicked on question will expand and show the answer.
 */
window.onload = () => {

    const faqs = $("faqs");
    const h2Elements = faqs.getElementsByTagName("h2");
    let h2Node;

    for (let i = 0; i < h2Elements.length; i++) {
        h2Node = h2Elements[i];

        // Attach event handler
        h2Node.onclick = () => {
            let h2 = this;

            for (let i = 0; i < h2Elements.length; i++) {
                if (h2Elements[i] != this) {
                    h2Elements[i].removeAttribute("class");
                    h2Elements[i].nextElementSibling.removeAttribute("class");
                }
            }

            h2.hasAttribute("class")
                ? h2.removeAttribute("class")
                : h2.setAttribute("class", "minus");

            h2.nextElementSibling.hasAttribute("class")
                ? h2.nextElementSibling.removeAttribute("class")
                : h2.nextElementSibling.setAttribute("class", "open");
        }
    }

    $("first_link").focus();

} // End ();