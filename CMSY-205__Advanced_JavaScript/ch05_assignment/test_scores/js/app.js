/*
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript
 * Document Name: app.js
 * Document Date: 
 * Document Description:
 * -> Homework Assignment - Chapter 5 Problem 2: Test Score Array
 * -> Use a Test Score array.
 */

// Turn on strict mode.
"use strict"

const app = () => {
    const names = ["Ben", "Joel", "Judy", "Anne"]
    const scores = [88, 98, 77, 88]
    const n = 4

    /**
     * @name $
     * @desc Return output to HTML document with element of id.
     */
    const $ = id => document.getElementById(id)

    /** 
     * @name addScore
     * @desc Add a full name and test score to the array.
     */
    function addScore() {
        const name = $('name').value
        const score = parseInt($('score').value)

        // Validate the user's entry.
        if (name == '' || isNaN(score) || score < 0 || score > 100) {
            alert('You must enter a name and a valid score')
        } else {
            names[names.length] = name
            scores[scores.length] = score
            $('name').value = ''
            $('score').value = ''
        }

        $('name').focus()
    }

    /**
     * @name displayResults
     * @desc Display the average high and low scores on the front end.
     */
    const displayResults = () => {
        let high = scores[0]
        let low = scores[0]
        let avg = 0
        let i

        for (i = 0; i < n; i++) {
            // High Score
            if (high < scores[i]) high = scores[i]
            
            // Low Score
            if (low > scores[i]) low = scores[i]
            
            // Average Score
            avg = avg + scores[i]
        }

        avg = avg / n

        // Print average score, high score, low score to results id in HTML document.
        let con = "Average Score = " + avg + "\nHigh Score = " + high + "\nLow Score = " + low + "\n"

        for (i = 0; i < scores.length; i++) {
            con = con + "\n" + names[i] + ", " + scores[i]
        }

        $('results').innerHTML = con
    }

    window.onload = () => {
        $('add').onclick = addScore
        $('display').onclick = displayResults
    }
}

app()