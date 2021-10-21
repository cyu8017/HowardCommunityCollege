'''
Lab Number: 04 Question #2
Assignment Name: Using Loops To Display Temperature Conversion Tables
Application Name: For Loop Celsius to Fahrenheit

Assignment Description:
- Use a for loop to display a table of the Celsius temperatures 0 through 20
- and their converted Fahrenheit equivalents. 
- The formula for converting a temperature from Celsius to Fahrenheit is below.
- (9/5) * Celsius temp + 32
'''

def main():
  
  # Print message to user
  print('Temperature conversions using a for loop.')
  print()

  # Print conversion table
  print ("{:<5} {:<5}".format('Cels', 'Fahr'))

  # List Celsius degrees from 0 to 20.
  for cels in range(0, 21):

    # Take in Celsius from loop and convert it to fahrenheit.
    cels2Fahr = f'{((9/5) * cels + 32):.2f}'

    # Print solution in table.
    solution = ("{:<5} {:<5}".format(cels, cels2Fahr))

    # Print output
    print(solution)

main()