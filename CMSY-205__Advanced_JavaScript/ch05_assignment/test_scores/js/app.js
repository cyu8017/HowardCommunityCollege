/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description:
 * -> Homework Assignment - Chapter 5 Problem 2: Test Score Array
 * -> Use a Test Score array.
 */

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
const n = 4;

/* 
 * Function Name: $
 * Function Purpose: 
 * -> Return output to HTML document with element of id.
 */
const $ = id => document.getElementById(id);
// End $.

/*
 * Function Name: addScore()
 * Function Purpose: 
 * -> Add a full name and test score to the array. 
 */
function addScore() {

    // Obtain user entry values.
    const name = $("name").value;
    const score = parseInt($("score").value);

    // Validate the user's entry.
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
    } else {
        names[names.length] = name;
        scores[scores.length] = score;
        $("name").value = "";
        $("score").value = "";
    }

    $("name").focus();

}; // End addScore().

/*
 * Function Name: displayResult() 
 * Function Purpose: Display the average high and low scores.
 */
const displayResults = () => {

    let high = scores[0];
    let low = scores[0];
    let avg = 0;

    for (i = 0; i < n; i++) {
        // High Score
        if (high < scores[i]) {
            high = scores[i];
        }

        // Low Score
        if (low > scores[i]) {
            low = scores[i];
        }

        // Average Score
        avg = avg + scores[i];
    }

    avg = avg / n;

    // Print average score, high score, low score to results id in HTML document.
    let con = "Average Score = " + avg + "\nHigh Score = " + high + "\nLow Score = " + low + "\n";

    for (i = 0; i < scores.length; i++) {
        con = con + "\n" + names[i] + ", " + scores[i];
    }

    $('results').innerHTML = con;

} // End displayResult().

/*
 * Function Name: displayScores()
 * Function Purpose: Display scores stored in the array.
 */
const displayScores = () => {
    // Print all scores below. Show average, high, and low scores. 
    const con = "<tr><td colspan='2'><h2>Scores</h2></td></tr><tr><td>Name</td><td>Score</td></tr> ";

    for (i = 0; i < n; i++) {
        con = con + "<tr><td>" + names[z] + "</td><td>" + scores[z] + "</td></tr>";
    }

    $('results').innerHTML = con;
} // End displayScores().

/*
 * Document Window onload.
 * Apply action listeners to buttons.
 */
window.onload = () => {
    $("add").onclick = addScore;
    $("display").onclick = displayResults;
} // End Window onload.