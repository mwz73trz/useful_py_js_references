# merge lists with asterisks

pitchers = ['Aaron Civale', 'Shane Bieber']
first_base = ['Bobby Bradley', 'Josh Naylor']
third_base = ['Jose Ramirez', 'Yu Chang']

all_players = [*pitchers, *first_base, *third_base]

print(all_players)