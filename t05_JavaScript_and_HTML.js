
console.log( "Running t01_introduction.js" );

//Variables
let username = "Cole";
let year = 2026;
let age = 15;
let money = 378;
let birthyear;
let oldage;
oldage = age + 10;
birthyear = year - age;
halfmoney = money / 2

console.log("You were born in " + birthyear )
console.log("In 10 years you will be " + oldage)
console.log("You have $" + money)
console.log("Uh-oh! You spent half of your money! You now have $" + halfmoney)

const OUTPUT = document.getElementById("JavaScriptOutput");

OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML += "<p>Hello " + username + "</p>";
OUTPUT.innerHTML += "<p>Second Paragraph line.</p>";
OUTPUT.innerHTML += "<p>Third Paragraph line.</p>";
