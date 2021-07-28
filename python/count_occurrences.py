# Count All Occurrences

from collections import Counter

numbers = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
counted_numbers = Counter(numbers)
print(counted_numbers)

letters = "aaaabbbbaaabccccccdddddddabcd"
counted_letters = Counter(letters)
print(counted_letters)
