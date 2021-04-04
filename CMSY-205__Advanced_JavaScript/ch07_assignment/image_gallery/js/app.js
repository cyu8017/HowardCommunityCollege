// Charlie Yu 
// CMSC205
// Programmming Assignment 7
// Problem 1: Develop an Image Gallery application
// In this exercise, you'll develop an Image Gallery application that
// displays different images when the user clicks on the links at the 
// top of the page. 

$(document).ready(() => {

	// preload images
	$("#image_list a").each(() => {
		let swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	// set up event handlers for links 
	$("#image_list a").click((evt) => {

		// Swap images 
		let imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);

		// Swap captions
		let caption = $(this).attr("title");
		$("#caption").text(caption);

		// Cancel the default action of the link 
		evt.preventDefault(); // jQuery cross-browser method
	}) // end click

	// Move focus to first thumbnnail
	$("li:first-child a:first-child").focus();
	
});  // end ready