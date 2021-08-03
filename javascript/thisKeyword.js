// This refers to the object itself.
// To make the getName() method work in the student object, the object has to access its own properties. This is possible via this keyword inside the object.

var student = {
  name: "Matt",
  getName: function() {
    console.log(this.name);
  }
}

student.getName();
