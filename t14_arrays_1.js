console.log("Running t14_JavaScript_and_HTML.js");


//variables
let Username = "Ayush";
let year = 2026;
let age = 15;
let money = 20;
let birthyear;
let oldage;
let pocketMoney = 20;
let newAge = age + 10;
birthyear = year - age;
halfMoney = money / 2; 


/********************************
 Main code
 ********************************/

 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 function start(){
OUTPUT.innerHTML += ("<p>Hi " + Username + "</p>");
OUTPUT.innerHTML += ("<p>As of " + year + " you are " + age + " years old" + "</p>");
OUTPUT.innerHTML += ("<p>You were born in " + (year - age) + "</p>");
OUTPUT.innerHTML += ("<p>In 10 years you will be " + newAge + " years old" + "</p>");
OUTPUT.innerHTML += ("<p>You have " + pocketMoney + " dollars" + "</p>" );
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + "</p>" );
OUTPUT.innerHTML += ("<p>Then you get $3, now you have " + (halfMoney + 3) + "</p>" );
displayProduct("Chocolate bar", "4")
displayProduct("Chips", "3")
displayProduct("Drink", "2.50")
OUTPUT.innerHTML += "<p>Less code matters</p>"
  OUTPUT.innerHTML += "This week's pay:<br>";
  OUTPUT.innerHTML += "Monday: $"+mondayPay+"<br>";
  OUTPUT.innerHTML += "Tuesday: $"+tuesdayPay+"<br>";

  let classArray = ["Alice", "Bob", "Kaia", "Olivia", "Aroha", "Josh"];
  let choice = CHOOSE_FIELD.value;
  OUTPUT.innerHTML = "You chose: "+classArray[choice]+ "<br>";
  OUTPUT.innerHTML = classArray;


OUTPUT.innerHTML = "The " + choice + " person in the class is "+ classArray[choice];

 }




/********************************
 Functions
 ********************************/ 

function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>"
}

/*
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
} 
    */

function getFormInput(){
    let userAge = Number(document.getElementById("ageField").value);
        let userMoney = Number(document.getElementById("moneyField").value);

    age = userAge;
    pocketMoney = userMoney;
    halfMoney = pocketMoney / 2;
    newAge = age + 10;

    start();
    
    if (pocketMoney >= 4){
        OUTPUT.innerHTML += "<p>You can afford a chocolate bar millionare brodie</p>"
    }

    if (pocketMoney <= 3.99){
        OUTPUT.innerHTML += "<p>You cannot afford a chocolate bar homeless kid</p>"
    }

}

 function calculatePay(_hours){
    return _hours * 10;
  }

  let mondayPay = calculatePay(8);
  let tuesdayPay = calculatePay(6);
 