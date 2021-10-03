def if_else_mess(http_status):
    if http_status == 400:
        print("Bad Request")
    elif http_status == 403:
        print("Forbidden")
    elif http_status == 404:
        print("Not Found")
    else:
        print("Other")

http_status = 400

if_else_mess(http_status)