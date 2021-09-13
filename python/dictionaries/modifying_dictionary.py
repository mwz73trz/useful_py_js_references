# modifying an existing dictionary

dictionary = {
    "month": "september",
    "day": "1st",
    "year": "2021"
}

# modify value by referring to key

dictionary["month"] = "june"
print(dictionary)

# use update() to modify dictionary

dictionary.update({"month": "june"})
print(dictionary)

# add new item to dictionary

dictionary["time"] = "4pm"
print(dictionary)

# update can also be used to add new item

dictionary.update({"time": "4pm"})
print(dictionary)