/*
 * Author: Charlie Yu 
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description:
 * -> Homework Assignment: Chapter 6 - Problem 1:  FAQs.
 * -> Create FAQ application.
 */

const app = () => {
    "use strict"
    
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

            h2Node.onclick = function() {
                let h2 = this
                for (let i = 0; i < h2Elements.length; i++) {
                    if (h2Elements[i] !== this) {
                        h2Elements[i].classList.remove("minus");
                        if (h2Elements[i].nextElementSibling) {
                            h2Elements[i].nextElementSibling.classList.remove("open")
                        }
                    }
                }

                h2.classList.toggle("minus")
                if (h2.nextElementSibling) {
                    h2.nextElementSibling.classList.toggle("open")
                }
            };
        }

        $("first_link").focus()
    }
}

app()