/* 
 * Author: Charlie Yu
 * Course Name: CMSY179 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> Un-blur an image.
 */

// Turn on Strict Mode 
"use strict";

const app = () => {
    /*
     * Function Name: init() 
     * Function Purpose: 
     * -> The init function sets the event handler functions for the mouseover
     * -> and mouseout events. 
     */
    const init = () => {

        // Use the image with the id of map
        const mapImage = document.getElementById("map");

        // Use the clearImage event handler function for the mouseover event.
        mapImage.onmouseover = clearImage;

        // Use the blurImage eventhandler function for the mouseout event.
        mapImage.onmouseout = blurImage;

    }; // End init()

    /* 
     * Function Name: clearImage()
     * Function Purpose: 
     * -> Mouseover event handler function. 
     * -> Use the image with the id of map. 
     */
    const clearImage = () => {

        // Use the image with the id of map
        const image = document.getElementById("map");

        // Use the map.jpg image for the image source.
        image.src = "images/map.jpg";

    }; // End clearImage()

    /* 
     * Function Name: blurImage()
     * Function Purpose: 
     * -> This function handles the mouse event to un-blur the image.
     */
    const blurImage = () => {

        // Use the image with the id of map
        const image = document.getElementById("map");

        // Use the mapblur.jpg image for the image source.
        image.src = "images/mapblur.jpg";

    }; // End blurImage()

    // Set the window onload event to use the init function handler.
    window.onload = init;
}

app();