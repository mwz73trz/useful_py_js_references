// If an expression throws errors, you can handle them with the try…catch statement.

function weekDay(dayNum) {
  if (dayNum < 1 || dayNum > 7) {
    throw 'InvalidDayNumber'
  }else{
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][dayNum - 1];
  }
}

try { 
  let day = weekDay(0);
  console.log(day);
}
catch (e) {
  let day = 'unknown'
  console.log(e)
}