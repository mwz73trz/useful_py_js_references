class Node(object):
    def __init__(self, value):
        self.value = value
        self.nextnode = None
        self.prevnode = None

a = Node(1)
b = Node(2)
c = Node(3)

a.nextnode = c
b.prevnode = a

b.nextnode = c
c.prevnode = b

print(b.value)
print(b.nextnode.value)
print(b.prevnode.value)