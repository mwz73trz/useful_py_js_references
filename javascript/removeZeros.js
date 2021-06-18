// remove the zeros from a number
function removeZeros(number) {
  let arrOfNum = number.toString().split('');
  let answer = '';
  arrOfNum.forEach((element, index) => {
    if(element !== '0') {
      answer += element;
    }
  })
  return answer;
}

console.log(removeZeros(50680019));