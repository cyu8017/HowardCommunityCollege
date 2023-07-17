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

    def Accelerate(self):
        if self.__speed <= 115:
            self.__speed += 5
        else:
            print("Warning: you cannot go faster than 120 MPH!!")

    def brake(self):
        if(self.__speed >= 5):
            self.__speed -= 5
        else:
            print("Unable to brake, the vehicle is not moving!!")

    def getSpeed(self):
        return self.__speed

    def setspeed(self, speed):
        self.__speed = speed

# First Test Case
obj1 = Car()
for i in range(1, 6):
    obj1.Accelerate()
    print("The speed of the car after acceleration number ",
          i, " is", obj1.getSpeed())
print()
for i in range(1, 6):
    obj1.brake()
    print("The speed of the car after brake number ", i, " is", obj1.getSpeed())
print()

# Second Test Case
obj2 = Car()
obj2.setspeed(100)
for i in range(1, 6):
    obj2.Accelerate()
    print("The speed of the car after acceleration number ",
          i, " is", obj2.getSpeed())
print()
for i in range(1, 6):
    obj2.brake()
    print("The speed of the car after brake number ", i, " is", obj2.getSpeed())
print()

# Third Test Case
obj3 = Car()
obj3.setspeed(-5)
for i in range(1, 6):
    obj3.Accelerate()
    print("The speed of the car after acceleration number ",
          i, " is", obj3.getSpeed())
print()
for i in range(1, 6):
    obj3.brake()
    print("The speed of the car after brake number ", i, " is", obj3.getSpeed())
print()
