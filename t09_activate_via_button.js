console.log("Running Task 09...");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************


/****************************
 Functions
****************************/
function start() {
//Variables 
let username="Cole";
let year= 2026;
let age= 16;
let money= 10;
let birthYear;
let oldAge;
oldAge= age + 10;
birthYear= year - age;
halfmoney= money / 2
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

/****************************
Main code 
****************************/

OUTPUT.innerHTML += "<p> Hi " + username + " as of " + year + " you are " + age + " years old.<p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + " years old</p>";
OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
OUTPUT.innerHTML += "<p>You spend half your money, now you have " + halfmoney + " dollars</p>";
OUTPUT.innerHTML += "<p>You get $3," +" now you have "+ (halfmoney + 3) + " dollars</p>";
OUTPUT.innerHTML += "<p>You pressed the button!</p>";
}