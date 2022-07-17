/*
 * Author: Charlie Yu 
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description:
 * -> Homework Assignment: Chapter 6 - Problem 1:  FAQs.
 * -> Create FAQ application.
 */

// Turn on strict mode.
"use strict"

const app = () => {
    
    /**
     * @name $
     * @desc Return output to HTML document with element of id.
     * @param {*} id 
     * @returns id
     */
    const $ = id => document.getElementById(id)

    /**
     * @name ()
     * @desc When window loads, load FAQs application function.
     * @desc When user clicks on a question, the component div will expand and show the answer.
     * @desc When the user clicks another question, the previous expanded div will collapse.
     */
    window.onload = () => {
        const faqs = $("faqs")
        const h2Elements = faqs.getElementsByTagName("h2")
        let h2Node
        for (let i = 0; i < h2Elements.length; i++) {
            h2Node = h2Elements[i]

            // Attach event handler
            h2Node.onclick = () => {
                let h2 = this
                for (let i = 0; i < h2Elements.length; i++) {
                    if (h2Elements[i] != this) {
                        h2Elements[i].removeAttribute("class")
                        h2Elements[i].nextElementSibling.removeAttribute("class")
                    }
                }

                h2.hasAttribute("class")
                    ? h2.removeAttribute("class")
                    : h2.setAttribute("class", "minus")

                h2.nextElementSibling.hasAttribute("class")
                    ? h2.nextElementSibling.removeAttribute("class")
                    : h2.nextElementSibling.setAttribute("class", "open")
            }
        }

        $("first_link").focus()
    }
}

app()