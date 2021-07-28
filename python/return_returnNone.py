# use return instead of return None

def double(n):
    print(n * 2)

double(5)
print(type(double(5)))

def add_zero(z):
    z.append(0)

z = [1, 2, 3, 4]
add_zero(z)

print(z)
print(type(add_zero(z)))