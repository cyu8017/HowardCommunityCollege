'''
Lab Number: 09
Assignment Name: Objects
Application Name: Car Data

Assignment Description:

- Write a class named Car that has the following hidden data attributes:
   _year: (for the car's year)
   _make: (for the make of the car)      - default make of your choosing.
   _model: (for the car's model)         - default model of your choosing.
   _speed: (for the car's current speed) - default speed of 0.

- The class should have the following methods (and only these methods) for working with the data attributes:
   - setYear sets the __year attribute with the year and car was made. 
       - Takes the year made as an argument.
       - Valid years are 1903 and up. Ex. setYear(2000)
  
   - getYear - Returns the _year attribute for the car.

   - setMake - sets the _make attribute (manufacturer). 
       - The argument cannot be blank and cannot be made up of only spaces. 
       - Ex. setMake("Ford").
  
   - getMake - returns the _make attribute of the car
   
   - setModel - sets the _model attribute for the car (explorer, F-150, etc).
       - The argument cannot be blank and cannot be made up on only spaces.
       - Ex. setYear(2000).
  
   - getModel - returns the _model attribute for the car. 

   - Accelerate: The accelerate method should add 5 to the _speed attribute when it is called.
        - NOTE: Do not exceed 120 mph.

   - Brake: The brake method should subtract 5 from the _speed attribute each time it is called.
        - NOTE: WHen braking, the speed cannot go below 0 mph. 

   - getSpeed: The getSpeed method should return the current speed.

- After defining the Car class, write a program that creates a Car object that performs the following tasks.
    -- Use any make, model, and year you like for the vehicle information.
    -- NOTE: Place the Car class definition and tests in the same program file.

- Test 1: 
    - Call the accelerate method for the car object five times.
    - After each call to the accelerate method, get the current speed of the car and display it.
    - Then call the brake method five times.
    - After each call to the brake method, get the current speed opf the car and display it.
    - Use a loop for this test.

- Test 2:
    - Manually set the value of the _speed variable to 100(for testing only) and then call the accelerate
      method for the car object five times. 
    - After each call to the accelerate method, get the current speed of the car and display it.
    - Then call the brake method five times.
    - After each call to the brake method, get the current speed of the car and display it.
    - Use a look for this test.
'''


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
