// makes upside down triangle

function triangle(rows) {
  str = "*";
  arr = [];
  for (let i = rows; i > 0; i--) {
    arr.push(str.repeat(i));
  }
  return arr.join("\n");
}

console.log(triangle(6));