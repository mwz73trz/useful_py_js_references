// function to determine amount of change from paid amount
function totalChange(amountPaid, totalCost) {
  let changeBack = amountPaid - totalCost;
  let stillOwe = totalCost - amountPaid;
  if(totalCost > amountPaid) {
    console.log(`You still owe $${stillOwe}`);
  }else if(amountPaid == totalCost) {
    console.log("Thank you for your business, have a great day!")
  }else{
    console.log(`Your change back is $${changeBack}`)
  }
}

totalChange(10.00, 11.00)
totalChange(10.00, 10.00)
totalChange(20.00, 10.00)