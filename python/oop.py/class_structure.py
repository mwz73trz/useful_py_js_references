# basic oop class structure

class Player:
    # class attribute
    alias = 'Baseball Player'

    def __init__(self, first_name, last_name, team, position):
        # instance attributes
        self.first_name = first_name
        self.last_name = last_name
        self.team = team
        self.position = position

# instance or object
obj = Player("Joey", "Votto", "Cincinatti Reds", "First Base")

# accessing class members
print(obj.first_name)
print(obj.last_name)

# error (instance attributes only be access by a instance of the class)
# print(Player.team)

print(obj.team)
print(obj.position)

print(obj.alias)
print(Player.alias)