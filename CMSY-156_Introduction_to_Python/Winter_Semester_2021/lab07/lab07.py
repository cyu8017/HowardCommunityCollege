def get_scores():
    num_scores = int(input("How many scores will you be entering: "))
    scores = []

    for i in range(num_scores):
        score = float(input(f"Enter test score {i + 1} (0 - 100): "))
        scores.append(score)

    return scores


def display_menu():
    print()
    print("1. Score Metrics (min/max/avg)")
    print("2. Mine Scores (low/high scores)")
    print("3. Update Score")
    print("4. Display Scores")
    print("5. Quit")


def score_metrics(scores):
    num_scores = len(scores)
    highest_score = max(scores)
    lowest_score = min(scores)
    average_score = sum(scores) / len(scores)
    print("\n\nNumber of Scores:", num_scores, "\n")
    print("High Score:", highest_score)
    print("Low Score:", lowest_score)
    print("Average Score:", average_score)


def mine_scores(scores):
    average_score = sum(scores) / len(scores)
    high_scores = [score for score in scores if score >= average_score]
    low_scores = [score for score in scores if score < average_score]
    print("\n\nTop Scores")
    for score in sorted(high_scores):
        print("{:.2f}".format(score))
    print("\nBottom Scores")
    for score in sorted(low_scores):
        print("{:.2f}".format(score))


def update_score(scores):
    print("\nUpdate Score:")
    print("---------------")
    display_scores(scores)

    try:
        index = int(input("Enter the index of the score to update: "))
        new_score = float(input("Enter the new score: "))
        scores[index] = new_score
        print("Scores after update:")
        display_scores(scores)

    except (ValueError, NameError, IndexError):
        print("Invalid input or index out of range. Score update failed.")

    except Exception as e:
        print("An unexpected error occurred:", str(e))


def display_scores(scores):
    print("\nScores in Reverse Order:")
    print("--------------------------")
    reversed_scores = scores[::1]

    for score in reversed_scores:
        print(score)


def main():
    scores = get_scores()
    display_menu()

    while True:
        choice = input("Enter your choice: ")

        if choice == "1":
            score_metrics(scores)
        elif choice == "2":
            mine_scores(scores)
        elif choice == "3":
            update_score(scores)
        elif choice == "4":
            display_scores(scores)
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.\n")

    display_menu()


if __name__ == "__main__":
    main()
