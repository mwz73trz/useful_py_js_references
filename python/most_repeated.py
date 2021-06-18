# returns the most repeated variable in the list
grades = [90, 90, 100, 55, 45, 100, 100, 90, 90, 89, 75]
print(max(set(grades), key = grades.count))