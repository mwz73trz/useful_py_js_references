# using count() function and a dictionary to find duplicate characters

def search(text):
    dictionary = {}
    for i in text:
        if(text.count(i) > 1):
            dictionary[i] = text.count(i)
    for i in dictionary:
        print(i)

search("hello")