# Swap dictionary key and values

my_dict = {1: 11, 2: 22, 3: 33}
my_dict = {i: j for j, i in my_dict.items()}

print(my_dict.items())
print(my_dict)

car_owners = {"Michael": "Honda", "Tiffany": "Chevrolet", "Hannah": "Nissan"}
car_owners = {i: j for j, i in car_owners.items()}

print(car_owners.items())
print(car_owners)