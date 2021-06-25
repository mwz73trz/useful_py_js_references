# merge lists using chain function

from itertools import chain

pitchers = ['Aaron Civale', 'Shane Bieber']
first_base = ['Bobby Bradley', 'Josh Naylor']
third_base = ['Jose Ramirez', 'Yu Chang']

all_players = list(chain(pitchers, first_base, third_base))

print(all_players)