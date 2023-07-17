def get_course_data():
    room_numbers = {
        "CS101": "3004",
        "CS102": "4501",
        "CS103": "6755",
        "NT110": "1244",
        "CM241": "1411"
    }

    instructors = {
        "CS101": "Haynes",
        "CS102": "Alvarado",
        "CS103": "Rich",
        "NT110": "Burke",
        "CM241": "Lee"
    }

    meeting_times = {
        "CS101": "8:00am",
        "CS102": "9:00am",
        "CS103": "10:00am",
        "NT110": "11:00am",
        "CM241": "11:00pm"
    }

    return room_numbers, instructors, meeting_times


def main():
    room_numbers, instructors, meeting_times = get_course_data()

    print("Courses: CS101 CS102 CS103 NT110 CM241\n")
    course_number = input("Enter a course number to display: ")

    if course_number in room_numbers:
        room_number = room_numbers[course_number]
        instructor = instructors[course_number]
        meeting_time = meeting_times[course_number]

        print(f"\n{course_number}:\n")
        print("Room:", room_number)
        print("Instructor:", instructor)
        print("Time:", meeting_time)
    else:
        print(f"\n{course_number}: not found.")


if __name__ == '__main__':
    main()
