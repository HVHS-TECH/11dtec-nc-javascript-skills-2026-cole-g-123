
console.log( "Running t.05_javascriptandhtml.js");

//Variables
let username = "Cole";
let year = 2026;
let age = 15;
let money = 378;
let birthyear;
let oldage;
oldAge = age + 10;
birthyear = year - age;
halfmoney = money / 2
const OUTPUT = document.getelmentByID("spaceforJavaScriptOutput");
OUTPUT.innerHTML += "<h2>"Added by JavaScript" + </h2>"
OUTPUT.innerHTML += "<p>You were born in " + birthyear </p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + oldAge + </p>";
OUTPUT.innerHTML += "<p>You have $" + money + </p>");
OUTPUT.innerHTML += "<p>Uh-oh! You spent half of your money! You now have $" + halfmoney + </p>";
+





/*******************
 *Functions
 *******************/
function writeLine(){
   // Add a line to the html page
   OUTPUT.innerhtml += "<p>Less code matters</p>";
}

/****************************
  Main Code
****************************/ 
writeLine()
