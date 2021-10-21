/* 
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript 
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment: Chapter 5 - Problem 1: To Do List Application
 * -> Develop an application that uses an array to manage a "To Do" list.
 */

// Turn on Strict Mode.
"use strict";

// Create empty array called taskList.
let taskList = [];

/* 
 * Function Name: $
 * Function Purpose: 
 * -> Return output to HTML document with element of id.
 */
const $ = id => document.getElementById(id);
// End $().

/*
 * Function Name: addTask()
 * Function Purpose: 
 * -> Add the task to the task list array.
 */
const addTask = () => {
    // Perform validation of adding a task to the array.
    if ($("new_task") == " ") {
        alert("Please enter a task.");
    } else {
        let newTask = $("new_task").value;
        let TaskList = $("task_list");
        TaskList.innerHTML = "";
        taskList.push(newTask);
        for (let theList in taskList) {
            TaskList.innerHTML += taskList[theList] + "\n";
            $("new_task").value = "";
        }
        $("new_task").focus();
    }
}; // End addTask()

/*
 * Function Name: showNextTask()
 * Function Purpose: 
 * -> Display the first item in the array.
 */
const showNextTask = () => {
    // When the array is empty, display an empty textbox and alert message
    if (taskList == "") {
        $("next_task").value = "";
        alert("No task remaining.");
    } else {
        let nextTask = $("next_task");
        let nextTaskString = taskList.shift();
        $("next_task").value = nextTaskString;
        $("task_list").innerHTML = $("task_list").innerHTML.replace(nextTaskString + "\n", "");
    }
}; // End showNextTask()

/* 
 * Document Window onload.
 * Apply action listeners to buttons.
 */
window.onload = () => {
    $("add_task").onclick = addTask;
    $("show_next_task").onclick = showNextTask;
}; // End Window onload.
