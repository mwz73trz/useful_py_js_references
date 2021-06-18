// determine if a string is an isogram (word containing a letter used more than once)

function isogram(str) {
  var i, k;
  for (i = 0; i < str.length; ++i) {
    for (k = i + 1; k < str.length; ++k) {
      if (str[i] === str[k]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isogram("michael"))
console.log(isogram("hannah"))