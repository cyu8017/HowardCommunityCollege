'''
Lab Number: 08
Assignment Name: CourseInfo
Application Name: lab08.py

Assignment Description:
- Write a program that lets the user enter a course number (prompt) and then looks up and displays:
-    the course number
-    the course room number
-    the course instructor
-    and the course meeting time
- You must use the dictionary's get() method to retrieve the data from the dictionary.
- If the course number is invalid, a message stating "Course not found" should be displayed.

- Create three dictionaries to store the course information. 
- Each Dictionary will use the same keys:

- First Dictionary:
-   Contains course numbers and room numbers where courses meet. 
-   The dictionary should have the following key-value pairs.
-   Course Number (Key): CS101, CS102, CS103, NT110, CM241
-   Room Number (Value): 3004, 4501, 6755, 1244, 1411

- Second Dictionary:
-   Contains course numbers and the names of the instructors that teach each course.
-   The dictionary should have the following key-value pairs:
-   Course Number (Key): CS101, CS102, CS103, NT110, CM241
-   Instructor (Value): Haynes, Alvardo, Rich, Burke, Lee

- Third Dictionary:
-   Contains course numbers and the meeting times of each course.
-   The dictionary should have the following key-value pairs:
-   Course Number (Key): CS101, CS102, CS103, NT110, CM241
-   Meeting Time (Value): 8:00am, 9:00am, 10:00am, 11:00am, 11:00pm
'''

def main():
  # Dictionary to define room numbers for each course.
  course_room_number = {
    'CS101': '3004',
    'CS102': '4501',
    'CS103': '6755',
    'NT110': '1244',
    'CM241': '1411',
  }

  # Dictionary to define instructors for each course.
  course_instructor = {
    'CS101': 'Haynes',
    'CS102': 'Alvardo',
    'CS103': 'Rich',
    'NT110': 'Burke',
    'CM241': 'Lee',
  }

  # Dictionary to define time for each course.
  course_time = {
    'CS101': '8:00am',
    'CS102': '9:00am',
    'CS103': '10:00am',
    'NT110': '11:00am',
    'CM241': '11:00pm',
  }

  # Prompt the user to enter the course number to search.
  print("Course: CS101 CS102 CS103 NT110, CM241")
  print()
  course_number_entry = input("Enter a course number to display: ")

  # Print catalog:
  # - If course_number_entry is empty. Print an error message.
  # - If course_number_entry is in the course_room_number dictionary. Print results.
  # - If course_number_entry is invalid. Print course number and error message.
  if course_number_entry == "":
    print("Your entry is empty. Please enter a course number.")
  elif course_number_entry in course_room_number:
    print() # Print empty line.
    print(course_number_entry)
    print() # Print empty line.
    print("Room        : ", course_room_number.get(course_number_entry))
    print("Instructor  : ", course_instructor.get(course_number_entry))
    print("Time        : ", course_time.get(course_number_entry))
  else:
    print(course_number_entry, ": not found")

main()
