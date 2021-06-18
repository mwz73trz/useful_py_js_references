# generators save memory
# list comprehension

import sys

my_list = [i for i in range(1000)]
print(sum(my_list))
print(sys.getsizeof(my_list), "bytes")

# generator comprehension

my_gen = (i for i in range(1000))
print(sum(my_gen))
print(sys.getsizeof(my_gen), "bytes")