from datetime import datetime
import os


def open_input_file(filename):
    try:
        return open(filename, 'r')
    except FileNotFoundError:
        print(f"\nERROR -- There is an issue with the file {os.path.abspath(filename)}. Please reenter:\n")
        return None


def open_output_file(filename):
    try:
        return open(filename, 'w')
    except OSError:
        print(f"\nERROR - There is an issue with file '{os.path.abspath(filename)}'. Please reenter:\n")
        return None


def read_ip_addresses(input_file):
    ip_addresses = set()
    record_count = 0

    for line in input_file:
        record_count += 1
        ip_address = line.strip().split()[0]
        if ip_address.startswith(('168.193', '224.174', '233.012')):
            ip_addresses.add(ip_address)

    input_file.close()
    return record_count, ip_addresses


def generate_report(record_count, ip_addresses, suspect_percentage, output_file):
    sorted_ip_addresses = sorted(ip_addresses)

    print("\nOutput Report")
    print("-------------")
    print(f"The total number of records in the file is: {record_count}")
    print(f"The number of suspect IP addresses is: {len(ip_addresses)}")
    print(f"The percentage of suspect IP addresses is: {suspect_percentage:.3f}")

    output_file.write("Output Report\n")
    output_file.write("-------------\n")
    output_file.write(f"The total number of records in the file is: {record_count}\n")
    output_file.write(f"The number of suspect IP addresses is: {len(ip_addresses)}\n")
    output_file.write(f"The percentage of suspect IP addresses is: {suspect_percentage:.3f}\n")
    output_file.write("\n")
    output_file.write("Suspect IP Addresses\n")
    output_file.write("--------------------\n")

    print("\nSuspect IP Addresses")
    print("--------------------")

    for ip_address in sorted_ip_addresses:
        current_datetime = datetime.now().strftime("%a %b   %d %H:%M:%S %Y")
        print(f"IP Address = {ip_address}   Date and Time = {current_datetime}")
        output_file.write(f"IP Address = {ip_address}   Date and Time {current_datetime}\n")

    output_file.close()


def main():
    input_filename = input("Enter the input file name: ")
    input_file = open_input_file(input_filename)

    while input_file is None:
        input_filename = input("Enter the name of the input file: ")
        input_file = open_input_file(input_filename)

    output_filename = input("Enter the output file name: ")
    output_file = open_output_file(output_filename)

    while output_file is None:
        output_filename = input("Enter the output file name: ")
        output_file = open_output_file(output_filename)

    record_count, ip_addresses = read_ip_addresses(input_file)
    suspect_percentage = (len(ip_addresses) / record_count) * 100
    generate_report(record_count, ip_addresses, suspect_percentage, output_file)

    print("\nProgram complete!")


if __name__ == '__main__':
    main()
