'''
Lab Number: 01
Assignment Name: Data Input, Data Processing, and Data Output
Application Name: Celsius to Fahrenheit
Assignment Description: 
- Write a program that asks the user for the temperature in Celsius. 
- Convert the Celsius temperature to the temperature in Fahrenheit using the following formula:
-   (9/5) * Celsius + 32
- The input for the program should accept the floating point values (decimals).
- The output for the program should display the Celsius temperature and Fahrenheit temperature.
'''

def main():

  # Prompt the user for an Celsius temperature entry.
  # Take the entry as a float.
  celsiusEntry = float(input("Enter the Celsius temperature: "))

  # Conversion to Fahrenheit equation.
  c2F = (9/5) * celsiusEntry + 32

  # Print result.
  print(f'{celsiusEntry:.2f}', "degrees Celsius converted to Fahrenheit is:", f'{c2F:.2f}')

main()