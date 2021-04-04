/*
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> Lab 3 - Arrays
 * -> 
 */

// Turn on Strict Mode.
'use strict';

/* 
 * Function Name: squareIt()
 * Function Purpose: 
 * -> Create a new function called squareIt.
 * -> Pass in parameter called SquareMe.
 * -> Return squareMe * squareMe.
 */
const squareIt = squareMe => squareMe * squareMe;
// End squareIt()

/* 
 * Function Name: arrDisplay()
 * Function Purpose: 
 * -> Create a function that displays the elements in an array. 
 * -> Pass in parameters (array, element, index, and name).
 */

const arrDisplay = (e1, index, arr) => {
    const lastIndex = arr.length - 1;

    index !== lastIndex ? document.write(e1 + ", ")
        : document.write(e1 + "<br><br>");
}
// End arrDisplay()

/* 
 * Function Name: comparedNumbers()
 * Function Purpose: 
 * -> Create a function that compares numbers in an array.
 * -> Pass in the parameters a and b. 
 * -> Sort the values in the array. 
 * -> Return the result.
 * -> Print the results of the sorted array in the HTML document. 
 */
const comparedNumbers = (a, b) => a - b;
document.write("<h1>Lab 3: Arrays</h1>");

/* 
 * Build even squares array using the array map method
 * and the pre-build squareIt function.
 */
const evenRoots = [2, 4, 6, 7, 10];
const evenSquares = evenRoots.map(squareIt);

/* 
 * Use the array forEach method and the pre-built arrDisplay
 * function to display the evenSquares array values.
 */
document.write("Even Squares: ");
evenSquares.forEach(arrDisplay);

// Create the odd roots array with odd values 1 through 9.
const oddRoots = [1, 3, 5, 7, 9];
const oddSquares = oddRoots.map(squareIt);

/* 
 * Use forEach method and pre-built arrDisplay function
 * to display the oddSquares array values.
 */
document.write("Odd Squares: ");
oddSquares.forEach(arrDisplay);

// Create allSquares array by concatenating the evenSquares and oddSquares array.
const allSquares = evenSquares.concat(oddSquares);

/* 
 * Build forEach method and the pre-built arrDisplay function 
 * to display the allSquares array.
 */
document.write("All Squaares: ");
allSquares.forEach(arrDisplay);
allSquares.sort(comparedNumbers);

/* 
 * Build forEach method and pre-built arrDisplay function to 
 * display the sorted allSquares array.
 */
document.write("All Squares Sorted: ");
allSquares.forEach(arrDisplay);
allSquares.reverse();

/*
 * Build forEach method and the prebuilt arrDisplay function to 
 * revered allSquares array values.
 */
document.write("All Squares Reversed: ");
allSquares.forEach(arrDisplay);