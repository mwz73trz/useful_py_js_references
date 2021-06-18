# find the factorial of a value to be entered in the input by creating a function
# sequential product of a factorial number starting from 1 to itself

def factorial(x):
    if x == 0:
        return 1
    return x * factorial(x - 1)

x = int(input())
print(factorial(x))
