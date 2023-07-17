import sys


def main():
    try:
        namelist1 = open("nameslist1.txt", "r")
        lines1 = namelist1.readline()

        namelist2 = open("nameslist2.txt", "r")
        lines2 = namelist2.readlines()

        allnames = open('allnames.txt', 'w')

        while lines1 != "":
            allnames.write(lines1)
            lines1 = namelist1.readline()

        for line in lines2:
            allnames.write(line)

    except:
        print("Error")
        sys.exit()


main()
