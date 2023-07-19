def calculate_sales_tax(total_cost):
    return total_cost * 0.05


def calculate_shipping_cost(phone_cost):
    return phone_cost * 0.018


def calculate_total_amount(phone_cost, warranty_cost):
    total_cost = phone_cost + warranty_cost
    sales_tax = calculate_sales_tax(total_cost)
    shipping_cost = calculate_shipping_cost(phone_cost)
    return total_cost + sales_tax + shipping_cost


def print_receipt(make_model, phone_cost, warranty_cost):
    sales_tax = calculate_sales_tax(phone_cost + warranty_cost)
    shipping_cost = calculate_shipping_cost(phone_cost)
    total_amount_due = calculate_total_amount(phone_cost, warranty_cost)

    print("\n Receipt:")
    print("Model: {}".format(make_model))
    print("Cost of Phone: ${:.2f}".format(phone_cost))
    print("Warranty cost: ${:.2f}".format(warranty_cost))
    print("Sales Tax: ${:.2f}".format(sales_tax))
    print("Shipping Cost: ${:.2f}".format(shipping_cost))
    print("Total Price: ${:.2f}".format(total_amount_due))


def main():
    make_model = input("Enter the phone model:")
    phone_cost = float(input("Enter the phone cost: $"))
    warranty_cost = float(input("Enter the warranty cost: $"))

    print_receipt(make_model, phone_cost, warranty_cost)


if __name__ == '__main__':
    main()
