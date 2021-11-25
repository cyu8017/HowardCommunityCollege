/* 
 * Author: Charlie Yu 
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> Object elements
 */

// Turn on Strict Mode
"use strict";

const app = () => {
    // Define Paragraph 1, Paragraph 2, Paragraph 3
    PARA1 = "The world has changed. I feel it in the water. I feel it in the earth. I smell it in the air. Much that once was is lost. For none now live who remember it. It began with the forging of the great rings. Three were given to the elves, immortal, wisest and fairest of all beings. Seven to the Dwarf Lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of men, who above all else desired power. For within these rings was bound the strength and will to govern each race.";
    PARA2 = "But they were all of them deceived for another ring was made. In the land of Mordor, in the fires of Mount Doom, the dark Lord Sauron forged in secretl a master ring, to control all others and into this ring, he poured his cruelty, his malice, and his will to dominate all life. One ring to rule them all.<br><br> One by one the free lands of Middle-earth fell to the power of the ring. But there were some who resisted. A last alliance of men and elves marched against the armies of Mordor and on the slopes of Mount Doom, they fought for the freedom of Middle-earth. Victory was near but the power of the ring could not be undone. It was in this moment when all hope had faded that Isildur, son of the King, took up his father's sword... Sauron, the ennemy of the free peoples of Middle-earth was defeated.<br><br>The ring passed to Isildur, who had this one chance to destroy Evil forever. But the hearts of men are easily corrupted. And the ring of power has a will of its own. It betrayed Isildur to his death. And some things that should not have been forgotten were lost. History became legend, legend became myth and for two and a half thousand years, the ring passed out of all knowledge until, when chance came, it ensnared a new bearer. The ring came to the creature Gollum who took it deep into the tunnels of the misty mountains and there it consumed him. The ring brought to Gollum unnatural long life. For five hundred years, it poisoned his mind. And in the gloom of Gollum's cave, it waited.";
    PARA3 = "Darkness crept back into the forests of the world. Rumour grew of a shadow in the East, whispers of a nameless fear and the ring of power perceived its time had now come. It abandoned Gollum. But something happened then the ring did not intend. It was picked up by the most unlikely creature imaginable: a Hobbit, Bilbo Baggins of the Shire. For the times will soon come when Hobbits will shape the fortunes of all... (Galadriel)";

    // Get the paragraph element objects using document.getElementById
    const paragraph1 = document.getElementById("p1");
    const paragraph2 = document.getElementById("p2");
    const paragraph3 = document.getElementById("p3");

    // Update the paragraph element's content using Paragraph1, Paragraph2, Paragraph3. 
    paragraph1.innerHTML = PARA1;
    paragraph2.innerHTML = PARA2;
    paragraph3.innerHTML = PARA3;

    // Append class attributes 
    paragraph1.setAttribute("class", "ptext1");
    paragraph2.setAttribute("class", "ptext2");
    paragraph3.setAttribute("class", "ptext3");

    // Print result in console. 
    console.log(paragraph1.getAttribute("class"));
    console.log(paragraph2.getAttribute("class"));
    console.log(paragraph3.getAttribute("class"));

    // Use document.querySelectorAll to create a list of all the paragraphs. 
    const paragraphList = document.querySelectorAll("p");

    // Use a for loop through the paragraph list and console.log each paragraph. 

    for (const i = 0; i < paragraphList.length; i++) {
        console.log(paragraphList[i]);
    }
}

app();