'use_strict'

window.onload = () => {
    let faqs = $("faqs")
    let h2Elements = faqs.getElementsByTagName("h2")
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
                : h2.setAttribute("class", "minus");
            h2.nextElementSibling.hasAttribute("class")
                ? h2.nextElementSibling.removeAttribute("class")
                : h2.nextElementSibling.setAttribute("class", "open")
        }
    }
    $("first_link").focus()
}

const $ = (id) => document.getElementById(id)