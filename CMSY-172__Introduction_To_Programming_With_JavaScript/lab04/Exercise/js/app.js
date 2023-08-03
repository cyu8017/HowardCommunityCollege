/**
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description:
 * -> HTML Forms
 */

// Turn on strict mode.
'use strict';

const app = () => {

  // Trim the pageTitle and convert the title to uppercase. 
  let pageTitle = 'JS Native Object Practice'
  pageTitle = pageTitle.trim()
  pageTitle = pageTitle.toUpperCase()

  // Display the trimmed uppercase version of the pageTitle variable from the previous step.
  document.write('<h1>' + pageTitle + '</h1>')

  // Get the length of the pageTitle and display it in the HTML document. 
  let ptLength = pageTitle.length
  document.write('The page of ' + pageTitle + ' is ' + ptLength + ' characters long.')
  document.write('<br><br>')

  // Create a new date object called today with today's date. 
  let today = new Date()
  let todayDate = today.toDateString()

  /* 
   * Modify the following document.writes below to display the numeric values for the 
   * Month, Day, and Year from todays date object created in the previous step.
   */
  document.write("<strong>Today is: </strong>")
  document.write('<br>')

  document.write(" - Month: " + today.getMonth())
  document.write('<br>')

  document.write(" - Day: " + today.getDate())
  document.write('<br>')

  document.write(" - Year: " + today.getFullYear())
  document.write('<br>')

  document.write("------------------")
  document.write('<br>')

  document.write("<strong>Today's date is:</strong> <br>" + todayDate)
  document.write("<br><br>")

  // Create a new date object using the following data value(milliseconds)
  let a = new Date(946702800000)

  // toDateString method to convert milliseconds into date. 
  let b = a.toDateString()
  document.write("<br><strong>New Date:</strong><br>" + b)
  document.write("<br><br>")

  /* 
   * Calculate the number of milliseconds between the two dates and display the result.
   * Apply the getTime method.
   */
  let difference = (today - a)
  document.write("The number of milliseconds between the two dates is: " + difference)
}

app()