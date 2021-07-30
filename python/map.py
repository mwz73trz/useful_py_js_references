# map function
# A program to add values from two lists and create a new list.

def add_list(a, b):
    return a + b

output = list(map(add_list, [2, 6, 3], [3, 4, 5]))
print(output)