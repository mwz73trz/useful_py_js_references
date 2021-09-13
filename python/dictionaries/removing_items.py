# removing items from dictionary

dictionary = {
    "month": "september",
    "day": "11th",
    "year": "2021"
}

# pop function to remove a particular item

dictionary.pop("month")
print(dictionary)

# popitem() to remove last item

dictionary.popitem()
print(dictionary)

# clear() removes everything

dictionary.clear()
print(dictionary)

# completely delete dictionary use del

del dictionary
print(dictionary)