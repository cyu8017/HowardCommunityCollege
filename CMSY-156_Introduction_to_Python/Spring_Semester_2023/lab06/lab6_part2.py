def get_countries_by_exchange_rate():
    countries = []
    with open('Exchrate.txt', 'r') as file:
        for line in file:
            data = line.strip().split(',')
            countries.append((data[0], float(data[2])))
    countries.sort(key=lambda x: x[1])
    return countries


def main():
    # Get the countries sorted by exchange rate in ascending order
    sorted_countries = get_countries_by_exchange_rate()

    # Display the sorted countries
    for country, exchange_rate in sorted_countries:
        print(country)


if __name__ == '__main__':
    main()
