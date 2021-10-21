'''
Lab Number: 02
Assignment Name: Data Input, Data Processing, and Data Output
Application Name: Fahrenheit to Celsius
Assignment Description: 
- Write a program that asks for the user for the temperature in Celsius. 
- Convert the Fahrenheit temperature to the temperature in Celsius using the following formula:
-  (Fahrenheit - 32)*5/9
- The input for the program should accept the floating point values (decimals).
- The output for the program  
'''

def main(): 
  # Prompt the user for Fahrenheit temperature entry. 
  # Take in the entry as a float.
  fahrenheitEntry = float(input("Enter the Fahrenheit temperature: "))

  # Conversion to Celsius equation.
  f2C = (fahrenheitEntry - 32)*5/9

  # Print result.
  print(f'{fahrenheitEntry:.2f}', "degrees Fahrenheit converts to approximately", f'{f2C:.2f}', "degrees Celsius.")

main()