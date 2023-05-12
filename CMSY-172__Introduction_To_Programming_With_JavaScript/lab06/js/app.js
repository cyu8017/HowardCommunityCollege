/* 
 * Author: Charlie Yu
 * Course Name: CMSY179 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> Un-blur an image.
 */

const app = () => {
    'use strict'

    /**
     * @name init
     * @desc The init function sets the event handler functions for the mouseover and mouse out events.
     * @desc Use the mapImage variable to set the image with the ID of map.
     * @desc Use the clearImage event handler function for the mouseover event.
     * @desc Use the blurImage event handler function for the mouseout event.
     */
    const init = () => {
        const mapImage = document.getElementById("map")
        mapImage.onmouseover = clearImage
        mapImage.onmouseout = blurImage
    }

    /**
     * @name clearImage
     * @desc This function handles the mouseover event to clear the image.
     * @desc Use the image with the id of map.
     * @desc Use the map.jpg image for the image source.
     */
    const clearImage = () => {
        const image = document.getElementById("map")
        image.src = "images/map.jpg"
    }

    /**
     * @name blugImage
     * @desc This function handles the mouseevent to un-blur the image.
     * @desc Use the image with the id of map.
     * @desc Use the map.jpg image for the image source.
     */
    const blurImage = () => {
        const image = document.getElementById("map");
        image.src = "images/mapblur.jpg";
    }

    // Set the window onload event to use the init function handler.
    window.onload = init
}

app();