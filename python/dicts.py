# using get() and setDefault()
# use get to return the value will not throw errors

my_dict = {1: 'one', 2: 'two', 3: 'three', 4: 'four'}

print(my_dict.get(3))
print(my_dict.get(4))
print(my_dict.get(5))

print(my_dict.setdefault(3, 'Default Value'))
print(my_dict.setdefault(5, 'Default Value'))