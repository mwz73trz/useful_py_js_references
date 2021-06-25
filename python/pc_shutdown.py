# shutdown pc

import os

shutdown = input("Do you want to shutdown your computer (yes / no): ")
if shutdown == 'yes':
    os.system("shutdown /s /t l")
else:
    print('Shutdown is not requested')