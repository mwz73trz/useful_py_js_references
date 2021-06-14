# Simple Rock, Paper, Scissors Game
import random

# List of possible choices R(Rock), P(Paper), S(Scissors)
choices = ["R", "P", "S"]

# function to get choices by name
def get_choice(input):
    if input == "R":
        return "Rock"
    elif input == "P":
        return "Paper"
    elif input == "S":
        return "Scissors"
    else:
        return ""

print("Rock, Paper, Scissors -- Shoot!")
print("[R]ock, [P]aper, [S]cissors, and [Q]uit\n")
counter = 1
my_score = 0
computer_score = 0
while True:
    print("Game " + str(counter) + ":")
    print("Choose a letter:")
    user_choice = input()

    # to quit game
    if user_choice == "Q":
        print("Thanks for playing!")
        break;
    random_index = random.randint(0, 2)
    computer_choice = choices[random_index]
    print("You chose " + get_choice(user_choice) + " and the computer chose " + get_choice(computer_choice))

    if user_choice == "R" and computer_choice == "S":
        print("You win, Rock beats Scissors!")
        my_score += 1
    elif user_choice == "P" and computer_choice == "R":
        print("You win, Paper beats Rock!")
        my_score += 1
    elif user_choice == "S" and computer_choice == "P":
        print("You win, Scissors beat Paper!")
        my_score += 1
    elif user_choice == "R" and computer_choice == "P":
        print("You lose, Paper beats Rock!")
        computer_score += 1
    elif user_choice == "P" and computer_choice == "S":
        print("You lose, Scissors beat Paper!")
        computer_score += 1
    elif user_choice == "S" and computer_choice == "R":
        print("You lose, Rock beats Scissors!")
        computer_score += 1
    elif user_choice == computer_choice:
        print("It's a tie!")
    else:
        print("Please enter either [R], [P], [S], or [Q]")

    counter = counter + 1
    print("My Score: " + str(my_score))
    print("Computer Score " + str(computer_score))
    print("\n")


