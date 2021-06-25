# difference between random.seed() and random.setstate
import random

# seed stores random value from argument you pass
random.seed(100)
print(random.randint(1, 60))

# setstate stores specific number from generator
x = random.getstate()
print(random.random())
random.setstate(x)
print(random.random())