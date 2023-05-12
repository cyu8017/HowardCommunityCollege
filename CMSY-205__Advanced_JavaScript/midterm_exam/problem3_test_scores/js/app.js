"use strict";

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
let textDisplay;

const $ = (id) => document.getElementById(id);

const addElement = () => {
	// get user entries
	let name = $("name").value;
	let score = parseInt($("score").value);

	// check entries for validity
	if (name == "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");
	} else {
		names[names.length] = $("name").value;
		scores[scores.length] = parseInt($("score").value);
		$("name").value = "";
		$("score").value = "";
	}
	$("name").focus();
	$("results").value = "";
};

const listArray = () => {
	let scoresString = "";
	for (let i = 0; i < names.length; i++) {
		scoresString += names[i] + ", " + scores[i] + "\n";
	}
	$("results").value = scoresString;
};

const showBest = () => {
  let bestString = "";
	let highScore = Math.max.apply(Math, scores);
	for (let i in scores) {
		if (scores[i] > highScore) highScore = scores[i];
		bestString += "High Score Student = " + names[i] + "\n" + "High Score = " + highScore;
	}
	$("results").value = bestString;
}

window.onload = () => {
	$("add").onclick = addElement;
	$("name").focus();
	$("list_array").onclick = listArray;
	$("show_best").onclick = showBest;
};
