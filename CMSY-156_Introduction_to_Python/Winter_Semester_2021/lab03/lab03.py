def main():
    # Declare pricing variables
    pricePerScoop = float(1.50)
    discountedPricePerScoop = float(1.25)

    # Require the user to enter the number of scoops.
    # Set entry to be a float value.
    numOfScoops = float(input("How many scoops would you like? "))

    # This condition will check if the user enters 1 or 2 scoops.
    # Apply pricePerScoop into the cost.
    # Print the numOfScoops entry to be a whole number with 0 decimal places.
    # Print results with pricing to include 2 decimal places.
    if (numOfScoops > 0) and (numOfScoops < 3):
        print()  # Print blank line.
        print('The price per scoop is $', f'{pricePerScoop:.2f}')
        print('You ordered', f'{numOfScoops:.0f}', "scoop.")
        print('Your total cost is $', f'{(numOfScoops * pricePerScoop):.2f}', '.')

    # This condition will check if the user enters any value greater than or equal to 3.
    # Apply discountedPricePerScoop into the cost.
    # Print the numOfScoops entry to be a whole number with 0 decimal places.
    # Print results with pricing to include 2 decimal places.
    elif numOfScoops >= 3:
        print()  # Print blank line.
        print('The price per scoop is $', f'{discountedPricePerScoop:.2f}')
        print('You ordered', f'{numOfScoops:.0f}', "scoops.")
        print('Your total cost is $', f'{(numOfScoops * discountedPricePerScoop):.2f}', '.')

    # This condition will check the user enters 0 or a number that is negative.
    # Print the numOfScoops entry to be a whole number with 0 decimal places.
    else:
        print('You asked for', f'{numOfScoops:.0f}', 'scoops. You must order one or more scoops.')


main()
