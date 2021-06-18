def fibon(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for x in fibon(10):
    print(x)