// Charlie Yu 
// CMSC205
// Programming Assignment 9 
// Problem 2: Get the text of the span elements in an article and 
// then add then to the article as highlighted text called pulled quotes

/* 
 * Author: Charlie Yu  
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment - Chapter 9 Problem 2: Pull Quotes
 * -> Get the text of the span elements in an article and then
 * -> add them to the article as highlighted text called pulled 
 * -> quotes.
 */
$(document).ready(() => {
	$('span.pq').each(() => {
		const quote = $(this).clone();
		quote.removeClass('span');
		quote.addClass('pulledquote');
		$(this).before(quote)
	});
}); // End ();