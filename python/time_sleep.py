# Time.Sleep

import time

def time_sleep(x, y):
    for i in range(x, y):
        print(i)
        time.sleep(5)

time_sleep(1, 10)