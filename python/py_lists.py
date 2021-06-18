# for loop (list, tuple, or dictionary)
numbers = [1, 2, 3, 4, 5]
# iterate over each number and print each number to console
for number in numbers:
    print(number)

# range() method will loop from a starting point to one before the endpoint
print(list(range(0, 11)))

# using range() again with len() printing a list of names and providing their position in array
names = ["Michael", "Tiffany", "Hannah", "Owen"]
length_of_names = len(names)
for i in range(0, length_of_names):
    name = names[i]
    print(f"{name} is at postion {i}")

# as above enumerate can also be used to get position
# using same names list above
for position, name in enumerate(names):
    print(f"{name} is at position {position}")

# using a while loop to iterate over a list of numbers
num_list = [1, 2, 3, 4, 5]
# get length of num_list
num_list_length = len(num_list)
# store index to end loop when end of num_list_lenght is reached
index = 0
while index < num_list_length:
    print(num_list[index])
    index += 1

# one liner loop with list comprehension
teams = ["Cleveland Indians", "Cincinnati Reds", "Dallas Cowboys"]
[print(team) for team in teams]

# using same list comprehension, square each number making new list
nums = [1, 2, 3, 4, 5]
squared_nums = [num * num for num in nums]
print(squared_nums)

# filter list using one line
scores = [79, 90, 101, 81, 82, 100, 92]
under_90_scores = [score for score in scores if score < 90]
print(under_90_scores)

# Lambda Expression
# square a number
num_squared = (lambda x : x**2)(10.0)
print(num_squared)

# using Lambda and Map(), loop over list and square 
inputs = [1, 2, 3, 4, 5]
squares = map(lambda x : x**2, inputs)
# print and put squares in new list
print(list(squares))

# conditional lists
# all
score1 = 89
score2 = 75
score3 = 101

list_condition = [
                    score1 < 90,
                    score2 < 90,
                    score3 < 90
]

print("Pass" if all(list_condition) else "Fail")

# any
new_condition = [
                    score1 > 90,
                    score2 > 90,
                    score3 > 90
]

print("Pass" if any(new_condition) else "Fail")