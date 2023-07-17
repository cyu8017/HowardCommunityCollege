def get_currency_exchange(country):
    with open('Exchrate.txt', 'r') as file:
        for line in file:
            data = line.strip().split(',')
            if data[0].lower() == country.lower():
                return data[1], float(data[2])
    return None, None


def convert_currency(amount, from_currency, to_currency):
    from_currency_name, from_exchange_rate = get_currency_exchange(from_currency)
    to_currency_name, to_exchange_rate = get_currency_exchange(to_currency)

    if from_currency_name is None:
        return None, f"Currency information not found for {from_currency}."
    if to_currency_name is None:
        return None, f"Currency information not found for {to_currency}."

    converted_amount = amount * (from_exchange_rate * to_exchange_rate)
    return converted_amount, from_currency_name, to_currency_name


def main():
    try:
        # Get user input for the two country names and amount of money
        from_country = input("Enter the name of the country to convert from: ")
        to_country = input("Enter the name of the country to convert to: ")
        amount = int(input("Enter the amount of money to convert: "))

        # Convert the amount from the first country's currency to the second country's currency
        converted_amount, from_currency, to_currency = convert_currency(amount, from_country, to_country)

        # Display the result
        if converted_amount is not None and to_currency is not None:
            print(f"{amount} {from_currency} from {from_country} is equivalent to {converted_amount:.2f} {to_currency} from {to_country}.")
        else:
            print(f"Conversion failed.")
    except ValueError:
        print("Invalid input. Please enter a valid amount.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")


if __name__ == '__main__':
    main()