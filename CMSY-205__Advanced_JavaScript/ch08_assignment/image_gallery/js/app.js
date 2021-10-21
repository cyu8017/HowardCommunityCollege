/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 8 Problem 2: Image Gallery Effects
 * -> Add visual effects to the Image Gallery application.
 * -> Use effects to change the way the images are displayed and hidden.
 */

// Turn on Strict Mode
"use strict";

/* 
 * Function Name: ()
 * Function Purpose: 
 * -> When the document is loaded, 
 * -> listen for the action listeners to be clicked.
 * -> When the action listeners are clicked, apply effects.
 */
$(document).ready(() => {
  imageCounter = 0;
  $("#image_list a").each(() => {
    // get the image URL and caption for each image
    let imageURL = $(this).attr("href");
    let caption = $(this).attr("title");
    let slideNode = $("image_list");

    // preload the image for each link      
    let galleryImage = new Image();
    galleryImage.src = imageURL;

    // set up the event handlers for each link
    $(this).click((evt) => {
      $("#image").animate({
        marginLeft: "-=100px",
      }, 2000, () => {
        $("#caption").fadeOut(400);
        $("#image").fadeOut(400, () => {
          $(this).attr("src", imageURL).css({ "marginLeft": 0 }).fadeIn(200);
          $("#caption").text(caption).fadeIn(200);
        });
        imageCounter = (imageCounter + 1) % imageURL.length;
      });
      evt.preventDefault();
    });
  });

  // move the focus to the first link
  $("li:first-child a").focus();
}); // End ();
