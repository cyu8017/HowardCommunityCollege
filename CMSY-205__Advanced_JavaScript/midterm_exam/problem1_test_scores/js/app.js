"use strict";

let total = 0;
let entryCount = 0;
let entry;
let bestScore = 0;

do {
    entry = prompt("Enter test score\n" + "Or enter 999 to end entries", 999);
    entry = parseInt(entry);

    if (entry >= 0 && entry <= 100) {
        total = total + entry;
        entryCount++;
    }

    // Find best score
    if (entry != 999 && entry > bestScore) {
        bestScore = entry;
    } else if (entry != 999) {
        alert("Entry must by a valid number from 0 through 100\n");
    }
    /*
    entry !== 999 && entry > bestScore ? bestScore = entry
        : entry !== 999 ? alert("Entry must be a valid number from 0 through 100 or enter 999 to end entries.");
    */
} while (entry != 999);

let average = total / entryCount;
average = parseInt(average);

// Modify the sentence to include best score.
alert("Average score is " + average + "\n" + " Best Score is = " + bestScore);
