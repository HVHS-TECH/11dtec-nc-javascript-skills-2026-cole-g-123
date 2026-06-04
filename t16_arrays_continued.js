/****************************
Name of Task:
****************************/
//Loop from 0 to 9
console.log( "Starting Loop");
for(let i=99; i>0; i--){
    console.log( + i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + (i-1) + " bottles of milk on the wall.")
}

console.log( "Loop finished");
//Variables
 let username =" Ayush ";
 let year = 2026;
 let age = 14;
 let money = 10;

/****************************
 Main Code
 ****************************/
function singSong() {

    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    let bottles = Number(document.getElementById("bottleField").value);

    OUTPUT.innerHTML = "";

    for (let i = bottles; i > 0; i--) {

        if (i === 1) {
            OUTPUT.innerHTML += "<p>1 bottle of milk on the wall, 1 bottle of milk.</p>";
            OUTPUT.innerHTML += "<p>Take it down, pass it around, no more bottles of milk on the wall.</p><br>";
        }
        else if (i === 2) {
            OUTPUT.innerHTML += "<p>2 bottles of milk on the wall, 2 bottles of milk.</p>";
            OUTPUT.innerHTML += "<p>Take one down, pass it around, 1 bottle of milk on the wall.</p><br>";
        }
        else {
            OUTPUT.innerHTML += "<p>" + i + " bottles of milk on the wall, " + i + " bottles of milk.</p>";
            OUTPUT.innerHTML += "<p>Take one down, pass it around, " + (i - 1) + " bottles of milk on the wall.</p><br>";
        }
    }
}


 /****************************
  Functions
   ****************************/
 let classArray = ["Alice", "Bob", "Kaia", "Olivia", "Aroha", "Josh"];

 for(let i=0; i<classArray.length; i++){
    OUTPUT.innerHTML += "Person "+ i + ": " + classArray[i] + "<br>";
    }