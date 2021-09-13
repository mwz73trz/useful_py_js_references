# working with *args and **kwargs

def add_to_numbers(num1, num2):
    print(num1 + num2)

def add_any_numbers(*args):
    total = 0
    for number in args:
        total += number
    print("Total sum is: ", total)

add_to_numbers(1, 9)
add_any_numbers(2, 7, 1)

def print_stuff(**kwargs):
    print(kwargs)

print_stuff(a = 1, b = 2, c = "Hello World")