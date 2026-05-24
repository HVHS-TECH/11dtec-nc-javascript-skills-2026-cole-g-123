/*
  t10_input_from_HTML.js
  Collects age and pocket money from HTML input fields and updates the page on submit.
*/

console.log("Running t10_input_from_HTML.js");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const form = document.getElementById("userForm");
const nameField = document.getElementById("nameField");
const ageField = document.getElementById("ageField");
const moneyField = document.getElementById("moneyField");

function updatePage(name, age, pocketMoney) {
  OUTPUT.innerHTML = "<h2>Input Received</h2>";
  OUTPUT.innerHTML += `<p>Name: ${name || "Guest"}</p>`;
  OUTPUT.innerHTML += `<p>Age: ${age}</p>`;
  OUTPUT.innerHTML += `<p>Pocket money: $${pocketMoney}</p>`;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameField.value.trim();
  const age = ageField.value;
  const pocketMoney = moneyField.value;

  updatePage(name, age, pocketMoney);
});
