# useful builtins for collections
from collections import Counter

# Counter() returns the number of occurences in dictionary and sorts
data = [1, 1, 1, 1, 2, 3, 4, 3, 3, 5, 6, 7, 7]
count = Counter(data)

print(count)

# elements() returns the items from counter object
for i in count.elements():
    print(i, end = " ")

# most_common() returns a list of most common elements
print(count.most_common())