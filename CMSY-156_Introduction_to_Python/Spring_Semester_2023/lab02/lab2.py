def compute_average(total, count):
    return total / count if count != 0 else 0


def display_game_results(goals_per_game, shots_per_game, shots_per_goal):
    print("The goals per game is:", "{:.2f}".format(goals_per_game))
    print("The shots per game is:", "{:.2f}".format(shots_per_game))
    print("THe shot per goal is:", "{:.2f}".format(shots_per_goal))


def main():
    print("CMSY-156 Soccer Calculator \n")

    total_games_played = int(input("Enter games: "))
    total_shots_made = int(input("Enter shots: "))
    total_goals_scored = int(input("Enter goals: "))

    average_goals_per_game_scored = compute_average(total_goals_scored, total_games_played)
    average_shots_per_game_made = compute_average(total_shots_made, total_games_played)
    average_shots_per_goal_made = compute_average(total_shots_made, total_goals_scored)

    display_game_results(average_goals_per_game_scored, average_shots_per_game_made, average_shots_per_goal_made)

    print("\n Thank you for u sing the program.")


if __name__ == '__main__':
    main()
