import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 100, 0.1)
y = np.cos(x)

fig = plt.figure()
ax = plt.axes(xlim=(0, 100), ylim=(-1.1, 1.1))
line = plt.plot(x, y)
 
plt.show()