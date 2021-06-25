# merge lists using reduce function

from operator import add
from functools import reduce

A = [100, 45]
B = [55, 37, 0]
C = [1100, 4500]
D = [0, 45]

L = reduce(add, (A, B, C, D))

print(L)