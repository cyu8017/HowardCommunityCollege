/* 
 * Author: Charlie Yu
 * Course Name: CMSC205 - Advanced JavaScript 
 * Document Name: app.js
 * Document Date: 
 * Document Description: 
 * -> Homework Assignment: Chapter 5 - Problem 1: To Do List Application
 * -> Develop an application that uses an array to manage a "To Do" list.
 */

// Turn on strict mode
"use strict"

const app = () => {
    // Create empty array called taskList.
    let taskList = [];

    /**
     * @name $
     * @desc Return output to HTML document with element of id.
     * @param {*} id 
     * @returns id
     */
    const $ = id => document.getElementById(id)

    /**
     * @name addTask
     * @desc Add the task to the task list array.
     */
    const addTask = () => {
        // Perform validation of adding a task to the array.
        if ($("new_task") == " ") {
            alert("Please enter a task.")
        } else {
            let newTask = $("new_task").value
            let TaskList = $("task_list")
            TaskList.innerHTML = ""
            taskList.push(newTask)
            for (let theList in taskList) {
                TaskList.innerHTML += taskList[theList] + "\n"
                $("new_task").value = ""
            }
            $("new_task").focus()
        }
    }

    /**
     * @name showNextTask
     * @desc Displays the first item in the array.
     * @desc When task list is empty, Alert the user that there are no tasks remaining.
     */
    const showNextTask = () => {
        // When the array is empty, display an empty textbox and alert message
        if (taskList == "") {
            $("next_task").value = ""
            alert("No task remaining.")
        } else {
            let nextTask = $("next_task")
            let nextTaskString = taskList.shift()
            $("next_task").value = nextTaskString
            $("task_list").innerHTML = $("task_list").innerHTML.replace(nextTaskString + "\n", "")
        }
    }

    /* 
     * Document Window onload.
     * Apply action listeners to buttons.
     */
    window.onload = () => {
        $("add_task").onclick = addTask
        $("show_next_task").onclick = showNextTask
    }
}

app()