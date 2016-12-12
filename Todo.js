var WordInput1 = document.getElementById("WordInput1");
var SubmitButton2 = document.getElementById("SubmitButton2");
var tasks = document.getElementById("tasks");
var colorInput = document.getElementById("colorInput");
var reset= document.getElementById("reset");

SubmitButton2.addEventListener("click", function() {
tasks.innerHTML+= "<br>" + "<div style='color:" + colorInput.value + " '>" + WordInput1.value + "</div>";    
});

reset.addEventListener("click" , function(evt){
    tasks.innerHTML = "";
});



tasks.addEventListener("click", function(evt) {

     var targetTasks = evt.target;

     targetTasks.parentNode.removeChild(targetTasks);


 });
 
 
