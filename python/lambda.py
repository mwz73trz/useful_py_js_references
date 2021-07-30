# lambda function
# A Python program to find the value for (a+b)^2 using lambda

answer = lambda a, b: a**2 + b**2 + 2 * (a + b)
print(answer(3, 6))