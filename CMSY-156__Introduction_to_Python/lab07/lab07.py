'''
Lab Number: 07
Assignment Name: Lists
Application Name: lab07.py

Assignment Objective:
- Store and process test scores using lists and functions.

Assignment Description:
- There are seven functions required for this lab.
- A list must be used to store and process all test scores.
- All output must be the same as in the sample screenshots.

- First Function: main(no params, no return value):
-   The main function will first call the get_scores function and then the display_menu function.
-   The main function will then prompt the user for a menu choice.
-   The menu choice must be evaluated using a decision control structure to determine which function to execute.
-   Each function is associated with one menu choice.
-   After each menu choice and function call, the menu should redisplay using a repetition control structure.
-   The program must continue executing until the user selects the Quit menu option.

- Second Function: get_scores
-   a) No parameters
-   b) Return the list of scores
-   c) Ask the user for the number of test scores being entered
-   d) Repeatedly prompt the user to input scores until the specified number of scores has been entered.
       (from step b)
-   e) Store the scores in a list

- Third Function: display_menu
-   a) No parameters
-   b) No return value
-   c) The input statement should be in the main function directly after the call to display menu function.
-   Display a menu with the following menu options.

- Forth Function: score_metrics
-   a) Parameter: Scores list
-   b) No return value
-   c) Find and display the highest, and lowest test scores.
-   d) Calculate and display the average test score.

- Fifth Function: mine_scores
-   a) Parameter: scores list
-   b) No return value
-   c) Use list comprehensions to create two new lists and display them:
-         i. one with scores greater than or equal to the average score.
-        ii. one with scores less than the average score.
-       iii. each list should be sorted to display the scores in ascending order.
-   d) No return value
- Note: The new lists created in the function are not returned.
- Use two separate list comprehensions to generated two lists: 
-   The high and low test scores are based on the average test score.
-   The average test score should be included in the high test score list.

- Sixth Function: update_score
-   a) Parameter: scores list
-   b) No return value
-   c) Display the test scores numbered
-   d) Prompt the user for the score to update
-   e) Update the selected score (by index)
-   f) Redisplay the test scores after the update.
- Note: This function must check for the following exceptions:
-   ValueError
-   NameError
-   IndexError
-   Catch all other exceptions with a general exception handler.

- Seventh Function: display_scores
-   a) Parameter: scores list
-   b) No return value
-   c) Display the test scores in reverse order using a slice operation with negative indicies.
- Note: Do not use the reverse function for this operation.
'''
import sys

scores_list = []

def main():
  get_scores()

def get_scores():
  number_of_records = input('How many scores will you be entering: ')
  if number_of_records.isnumeric():
    error = 0
    for i in range(1, int(number_of_records) + 1):
      rec =  input(f"Enter Score {i} (0-100):- ")
      if rec.isnumeric():
        scores_list.append(int(rec))
      else:
        print("Please enter integer value!")
        error = 1
        break

      if not error:
        display_menu()

def display_menu():
  print('')
  print('')
  print('1. Score Metrics (min/max/avg)')
  print('2. Mine Score (low/high score)')
  print('3. Update Score')
  print('4. Display Score (reverse order)')
  print('5. Quit')
  
  choices = input('Enter your choice: ')
  if choices.isnumeric():
    choices = int(choices)
    if choices == 1:
      score_metrics(scores_list)
    elif choices == 2:
      mine_scores(record_list)
def score_metrics(scores_list):

def mine_scores(scores_list):

def update_score(scores_list):

def display_scores(scores_list):


main()