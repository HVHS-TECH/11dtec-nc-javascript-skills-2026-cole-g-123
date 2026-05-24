/*
  t12_conditionals.js
  Checks whether the user has enough pocket money to buy a $4 chocolate bar.
*/

console.log("Running t12_conditionals.js");

let pocketMoney = 3; // change this value to test affordability
let chocolatePrice = 4;

console.log("A chocolate bar costs $" + chocolatePrice);

if (pocketMoney >= chocolatePrice) {
  console.log("\nYou CAN afford a chocolate bar");
} else {
  console.log("\nSorry you CAN'T afford a chocolate bar");
}
