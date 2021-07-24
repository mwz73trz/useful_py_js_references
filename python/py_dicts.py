# use dict instead of if-elif statements

def blue_function(color):
    print(f"{color} 1")

def red_function(color):
    print(f"{color} 2")

def green_function(color):
    print(f"{color} 3")

def yellow_function(color):
    print(f"{color} 4")

colors_dict = {
    "blue": blue_function,
    "red": red_function,
    "green": green_function,
    "yellow": yellow_function
}

user_input = input("")
colors_dict.get(user_input)(user_input)