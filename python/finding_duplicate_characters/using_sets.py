def search(text):
    arr = []
    s = set()
    for i in range(len(text)):
        if(text[i] in arr):
            s.add(text[i])
        else:
            arr.append(text[i])
    print(s)

search("hello")