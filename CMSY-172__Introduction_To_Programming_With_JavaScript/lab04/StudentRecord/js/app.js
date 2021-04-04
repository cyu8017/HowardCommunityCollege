/*
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> Display and modifying student records.
 */

// Turn on Strict Mode.
'use strict';

/* 
 * Object Name: studentRecord
 * Object Purpose: 
 * -> Creates an object. 
 * -> Displays student record.
 * -> Sets a new major.
 * -> Sets a new GPA.
 */
const studentRecord = {
    fname: "Charlie",
    lname: "Yu",
    major: "Computer Science",
    gpa: 0,

    /* 
     * Function Name: displayStudentRecord
     * Function Purpose: 
     * -> Display all properties in the studentRecord object.
     */
    displayStudentRecord: () => {
        document.write("Name: " + this.fname + " " + this.lname + "<br><br>");
        document.write("Major: " + this.major + "<br><br>");
        document.write("GPA: " + this.gpa + "<br><br>");
    }, // End displayStudentRecord Method

    /* 
     * Method Name: setMajor
     * Method Purpose: 
     * -> Create a new method called setMajor.
     * -> This method will be used to update the major property. 
     */
    setMajor: (newMajor) => newMajor != "" ? this.major = newMajor 
        : document.write("new major error!"),
    // End setMajor Method

    /* 
     * Method Name: setGPA()
     * Method Purpose: 
     * -> Create a new method called setGPA. 
     * -> This method will be used to update the gpa property.
     */
    setGPA: (newGPA) => newGPA != "" ? this.gpa = newGPA 
        : document.write("new gpa error!")
    // End setGPA Method

}; // End studentRecord Object

// Update studentRecord objects' major and gpa values.
studentRecord.displayStudentRecord();
studentRecord.setMajor("Mechanical Engineer");
studentRecord.setGPA(3.19);
console.log(studentRecord);