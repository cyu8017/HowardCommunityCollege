'''
Lab Number: 05
Assignment Name: Functions
Application Name: Celsius to Fahrenheit & Fahrenheit to Celsius Functions

Assignment Description:
- Create a program with the following instructios (remember to define the functions before calling them):

- Celsius to Fahrenheit function:
    a. Function name and parameter name: to_fahr(ctemp)
    b. Parameter - temperature in Celsius
    c. Return value - temperature in Fahrenheit

    Formula: (9/5) * Celsius temp + 32.

    Note: The function must be passed the temperature to convert and must return the converted temperature.
          The function must not perform an input or output.

- Fahrenheit to Celsius function: 
    a. Function name and parameter name: to_cels(ftemp)
    b. Parameter - temperature in Fahrenheit
    c. Return value - temperature in Celsius 

    Formula: (Fahrenheit - 32) * 5/9

    Note: The function must be passed the temperature to convert and return the converted temperature.
          The function must not perform any input or output operations.

- Menu function:
    a. Function name: display_menu()
    b. Parameter: None
    c. Return value: None
    d. The appropriate temperature conversion function should be called for options 1 and 2,
       and the program should terminate for option 3.

- Main function: Use for temperature input, function calls, and temperature output.
    
    Note: Make sure to place the main function definition before the other function definitions.

    a. Call the display_menu function to display the menu.
    b. Prompt the user to make a menu choice.
       The menu should redisplay after each temperature conversion.
       The program should only terminate if the user selects option 3 to quit.

       1. For menu choice 1, Celsius to Fahrenheit:
          - Prompt the user to input the Celsius temperature to convert.
          - Call the to_fahr function passing as an argument the Celsius temperature entered by the user.
          - Use the input temperature and the returned temperature from the function to display the output.
          - The Celsius temperature and Fahrenheit temperature must be formatted with two decimal places using F-strings.

       2. For menu choice 2, Fahrenheit to Celsius:
          - Prompt the user to input the Fahrenheit temperature to convert.
          - Call the to_cels function passing as an argument the Fahrenheit temperature entered by the user.
          - Use the input temperature and the returned temperature from the function to display the output.
          - The Celsius temperature and the Fahrenheit temperature must be formatted with two decimal places using F-strings.

       3. For menu choice 3: Terminate the program. 
'''

import sys


def main():
    display_menu()
    choice = input('Enter your choice: ')

    if choice == '1':
        print()
        print('Convert Celsius to Fahrenheit')
        ctemp = float(input('Enter the Celsius temperature to convert: '))
        print(f'{(ctemp):.2f}', 'degrees Celsius is',
              f'{(to_fahr(ctemp)):.2f}', 'degrees Fahrenheit.')

    elif choice == '2':
        print()
        print('Convert Fahrenheit to Celsius')
        ftemp = float(input('Enter the Fahrenheit temperature to convert: '))
        print(f'{(ftemp):.2f}', 'degrees Fahrenheit is',
              f'{(to_cels(ftemp)):.2f}', 'degrees Celsius.')

    elif choice == '3':
        print('Exiting the program...')
        sys.exit()


def to_fahr(ctemp):
    return (9/5) * ctemp + 32


def to_cels(ftemp):
    return (ftemp - 32) * 5 / 9


def display_menu():
    print('Temperature Conversions')
    print()
    print('1) Celsius to Fahrenheit')
    print('2) Fahrenheit to Celsius')
    print('3) Quit')

main()
