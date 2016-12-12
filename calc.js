//
var number1 = document.getElementById("NumberInput1");
var number2 = document.getElementById("NumberInput2");
var submitbutton = document.getElementById("SubmitButton");
var Answer = document.getElementById("Answer");
var Operation = document.getElementById("Operation");




submitbutton.addEventListener("click" ,function(){
   ///This turns them into numbers that act properly while performing mathematical functions.
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value);
    var Operations = Operation.value;



///Adds the numbers together
    if (Operations === "Add"){
    Answer.innerHTML = (num1) + (num2);
}
///Subtracts, Multiplies, Divides, does the power, or does the root if the numbers are not added together hence "else and if".
 else if (Operations === "Subtract"){
    Answer.innerHTML = (num1) - (num2);
}
   else if (Operations === "Multiply"){
    Answer.innerHTML = (num1) * (num2);
}  
 else if (Operations === "Divide"){
    Answer.innerHTML = (num1) / (num2);
}
    
else if (Operations === "Power") {
    Answer.innerHTML = Math.pow((num1), (num2))
}
else if (Operations === "Root") {
    Answer.innerHTML = Math.pow((num1), 1/ (num2))
}

});