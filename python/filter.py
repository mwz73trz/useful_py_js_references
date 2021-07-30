# filter function

def is_postive(a):
    return a > 0

output = list(filter(is_postive, [1, -2, 3, -4, 5, 6]))
print(output)