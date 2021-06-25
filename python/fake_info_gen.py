# fake information generator
# pip install Faker
from faker import Faker

fake = Faker()
print(fake.name())
print(fake.email())
print(fake.country())

print(fake.profile())

# all methods in Faker using dir(Faker())
print(dir(Faker()))