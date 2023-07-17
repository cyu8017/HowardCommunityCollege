class Car:
    def __init__(self):
        self.__year = 2000
        self.__make = "Toyota"
        self.__model = "Camry"
        self.__speed = 0

    def setYear(self, year):
        self.__year = year

    def getYear(self):
        return self.__year

    def setMake(self, make):
        self.__make = make

    def getMake(self):
        return self.__make

    def setModel(self, model):
        self.__model = model

    def getModel(self):
        return self.__model

    def accelerate(self):
        if self.__speed <= 115:
            self.__speed += 5
        else:
            print("Warning: you cannot go faster than 120 MPH!!")

    def brake(self):
        if self.__speed >= 5:
            self.__speed -= 5
        else:
            print("Unable to brake, the vehicle is not moving!!")

    def getSpeed(self):
        return self.__speed

    def setSpeed(self, speed):
        self.__speed = speed


def test_case(car):
    for i in range(1, 6):
        car.accelerate()
        print("The speed of the car after acceleration number", i, "is", car.getSpeed())

    for i in range(1, 6):
        car.brake()
        print("The speed of the car after brake number", i, "is", car.getSpeed())


def main():
    # First Test Case:
    obj1 = Car()
    print("\nTest Case 1\n")
    test_case(obj1)

    # Second Test Case:
    obj2 = Car()
    obj2.setSpeed(100)
    print("\nTest Case 2\n")
    test_case(obj2)

    # Third Test Case:
    obj3 = Car()
    obj3.setSpeed(-5)
    print("\nTest Case 3\n")
    test_case(obj3)


if __name__ == "__main__":
    main()
