day = "Monday"

if day == "Sunday":
    print("Take it easy")
elif day == "Monday":
    print("Go to work")
elif day == "Tuesday":
    print("Work + Hobbies")
elif day == "Wednesday":
    print("Meetings")
elif day == "Thursday":
    print("Presentations")
elif day == "Friday":
    print("Interviews and party")
elif day == "Saturday":
    print("Time to do sports")

day = "Monday"

match day:
    case "Sunday"    : print("Take it easy")
    case "Monday"    : print("Go to work")
    case "Tuesday"   : print("Work + Hobbies")
    case "Wednesday" : print("Meetings")
    case "Thursday"  : print("Presentations")
    case "Friday"    : print("Interviews and party")
    case "Saturday"  : print("Time to do sports")
