def convert_to_numeric(number):
    numeric_number = ''
    for char in number:
        if char.isalpha():
            char = char.upper()
            if 'A' <= char <= 'C':
                numeric_number += '2'
            elif 'D' <= char <= 'F':
                numeric_number += '3'
            elif 'G' <= char <= 'I':
                numeric_number += '4'
            elif 'J' <= char <= 'L':
                numeric_number += '5'
            elif 'M' <= char <= 'O':
                numeric_number += '6'
            elif 'P' <= char <= 'S':
                numeric_number += '7'
            elif 'T' <= char <= 'V':
                numeric_number += '8'
            elif 'W' <= char <= 'Z':
                numeric_number += '9'
        else:
            numeric_number += char
    return numeric_number


def main():
    """
    Main function
    """

    telephone_number_entry = input("Enter a phone number to be translated: ")
    numeric_telephone_number = convert_to_numeric(telephone_number_entry)
    print(numeric_telephone_number)


if __name__ == "__main__":
    main()
    