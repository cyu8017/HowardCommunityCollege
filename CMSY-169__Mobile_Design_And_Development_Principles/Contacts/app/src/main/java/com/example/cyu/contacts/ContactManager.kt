package com.example.cyu.contacts

import android.content.ContentValues
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils.isEmpty
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_contact_manager.*

class ContactManager : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contact_manager)

        // Getting id value pass by MainActivity via Intent
        // If no value pass, it will return 0
        val recordID = intent.getIntExtra("id", 0)

        if (recordID == 0) {
            // Text: Add Contact
            save_btn.text = getString(R.string.Save_Button_Text)
        }

        // When user makes modifications to an existing contact, save the updated information to contacts.
        else {
            // Text: Update Contact
            save_btn.text = getString(R.string.Save_Button_Update_Text)

            val fname = intent.getStringExtra("fname")
            val lname = intent.getStringExtra("lname")
            val email = intent.getStringExtra("email")
            val phone = intent.getStringExtra("phone")
            val organization = intent.getStringExtra("organization")

            fname_txt.setText(fname)
            lname_txt.setText(lname)
            email_txt.setText(email)
            phone_txt.setText(phone)
            organization_txt.setText(organization)
        }

        // Save Button
        save_btn.setOnClickListener {

            // Capitalize the first letter of first name and first letter of last name.
            val firstName = fname_txt.text.toString().capitalize()
            val lastName = lname_txt.text.toString().capitalize()
            val emailAddress = email_txt.text.toString()
            val phoneNumber = phone_txt.text.toString()
            val organization = organization_txt.text.toString().capitalize()

            // First name EditText validation check
            if (isEmpty(firstName)) {
                Toast.makeText(this, "Enter Contact First Name", Toast.LENGTH_SHORT).show()
            }

            // Last name EditText validation check
            else if (isEmpty(lastName)) {
                Toast.makeText(this, "Enter Contact Last Name", Toast.LENGTH_SHORT).show()
            }

            // Phone number EditText validation check
            else if (isEmpty(phoneNumber)) {
                Toast.makeText(this, "Enter Contact Phone Number", Toast.LENGTH_SHORT).show()
            }

            // Email address EditText validation check
            else if (isEmpty(emailAddress)) {
                Toast.makeText(this, "Enter a valid Email Address", Toast.LENGTH_SHORT).show()
            }

            else {
                val values = ContentValues()

                // Locate the following values
                values.put("fname", firstName)
                values.put("lname", lastName)
                values.put("email", emailAddress)
                values.put("number", phoneNumber)
                values.put("organization", organization)

                // Adding contact
                if (recordID == 0) {
                    val database = DatabaseHandler(this)
                    val response = database.addContact(values)

                    // Check if content is added.
                    if (response == "ok") {
                        Toast.makeText(this, "Contact Added", Toast.LENGTH_SHORT).show()
                        val intent = Intent(this, MainActivity:: class.java)
                        startActivity(intent)
                        finish()
                    }

                    // If the content is not added, display error message.
                    else {
                        Toast.makeText(this, "Not Added.. Try again", Toast.LENGTH_SHORT).show()
                    }
                }

                // Updating a existing contact
                else {
                    val database = DatabaseHandler(this)
                    val res: String = database.updateContact(values, recordID)

                    // Check if content had been updated.
                    if (res == "ok") {
                        Toast.makeText(this, "Contact Updated", Toast.LENGTH_SHORT).show()
                        val intent = Intent(this, MainActivity:: class.java)
                        startActivity(intent)
                        finish()
                    }

                    // Error in updating contact information.
                    else {
                        Toast.makeText(this, "Error, Try Again", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        } // End Save Button

        // Delete Button
        delete_btn.setOnClickListener {

            val database = DatabaseHandler(this)
            val res: String = database.removeContact(recordID)

            // When the contact is successfully deleted, display this Toast Message
            if (res == "ok") {
                Toast.makeText(this, "Contact Deleted", Toast.LENGTH_SHORT).show()
            }

            // If contact is not successfully deleted, display this Toast Message
            else {
                Toast.makeText(this, "Error.. Try Again", Toast.LENGTH_SHORT).show()
            }

            val intent = Intent(this, MainActivity:: class.java)
            startActivity(intent)
            finish()
        } // End Delete Button
    } // End onCreate
} // End ContactManager