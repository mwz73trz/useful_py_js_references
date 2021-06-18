# use built in sort method 

data = [{'name': 'Michael', 'age': 48},
        {'name': 'Hannah', 'age': 16},
        {'name': 'Owen', 'age': 12}]

# using python sorted(), can be used to sort ascending and descending

sorted_data = sorted(data, key = lambda x: x['age'])
print(sorted_data)

# add reverse to sorted where False returns ascending, True returns descending, default is false

ascending_data = sorted(data, key = lambda x: x['age'], reverse=False)
descending_data = sorted(data, key = lambda x: x['age'], reverse=True)
default_data = sorted(data, key = lambda x: x['age'])

print(ascending_data)
print(descending_data)
print(default_data)