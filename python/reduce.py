# reduce function

import functools

def sum_two_elements(a, b):
    return a + b

numbers = [6, 2, 1, 3, 4]
result = functools.reduce(sum_two_elements, numbers)

print(result)