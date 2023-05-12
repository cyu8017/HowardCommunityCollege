const app = () => {
	'use strict'

	$(document).ready(() => {
		$('h2').hover(
			// Function to remove class name. 
			() => {
				$(this).next().removeClass('hidden');
			}, 
	
			// Function to add class name.
			() => $(this).next().addClass('hidden')
		)
	})
}