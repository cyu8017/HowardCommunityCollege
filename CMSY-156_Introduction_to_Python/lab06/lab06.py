'''
Lab Number: 06
Assignment Name: Files and Exceptions

Assignment Description:
- Objective: Read names from two different files into your program and write each name to a single new file.

- Download namelist1.txt & namelist2.txt input files. 

- Input files:
    - namelist1.txt & namelist2.txt -- Each file contains a list of 200 unique names.

- Output file:
    - Output all names to an output file called allnames.txt.

- Write a program that reads the names from the two input files and writes the names to the two output files:

  a. Use a try/except block to open all input and output files before processing. 
     Terminate the program if one or more files cannot be opened.

  b. Processing:
     - Use a try/except block to read from the input files and write to the output file.
     - Read all the names from one input file at a time. Write the names to the output file.
         - You must use a while loop to process the first input file - nameslist1.txt and write to the output file.
         - You must use a for loop to process the second input file - nameslist2.txt and write to the output file.
         - Each line in each input file is one name.
     - Make sure each name is written on a separate line in the output file.
     - There should be no blank lines between names in the output files.

  c. All input files and output file must be closed after all names have been processed.
'''
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
