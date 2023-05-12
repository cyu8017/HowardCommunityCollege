/*
 * Author: Charlie Yu
 * Course Name: CMSY172 - Introduction to JavaScript
 * Document Name: app.js
 * Document Date: 05/02/2018
 * Document Description: 
 * -> Display and modifying student records.
 */

const app = () => {
    'use strict'

    /**
     * @name studentRecord
     * @desc Creates an object.
     * @desc Displays student record.
     * @desc Sets a new major.
     * @desc Sets a new GPA.
     */
    const studentRecord = {
        fname: "Charlie",
        lname: "Yu",
        major: "Computer Science",
        gpa: 0,

        /**
         * @name displayStudentRecord
         * @desc Display student first name and last name.
         * @desc Display the major of study.
         * @desc Display the GPA.
         */
        displayStudentRecord: () => {
            document.write("Name: " + this.fname + " " + this.lname + "<br><br>")
            document.write("Major: " + this.major + "<br><br>")
            document.write("GPA: " + this.gpa + "<br><br>")
        },

        /**
         * @name setMajor
         * @desc Create a new method called setMajor.
         * @desc This method will be used to update the major property.
         * @param {*} newMajor 
         * @returns newMajor
         */
        setMajor: (newMajor) => newMajor != "" ? this.major = newMajor
            : document.write("new major error!"),

        /**
         * @name setGPA
         * @desc Create a new method called setGPA.
         * @desc This method will be used to update the gpa property.
         * @param {*} newGPA 
         * @returns newGPA
         */
        setGPA: (newGPA) => newGPA != "" ? this.gpa = newGPA
            : document.write("new gpa error!")
    };

    // Update studentRecord objects' major and gpa values.
    studentRecord.displayStudentRecord()
    studentRecord.setMajor("Mechanical Engineer")
    studentRecord.setGPA(3.19)
    console.log(studentRecord)
}

app()