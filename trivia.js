    //
    var score = 0;
    var btn = document.getElementById("Submit");
    var scoring = document.getElementById("score");

//This part checks the answers and then higlights it red if it is wrong and green if it is right
    btn.addEventListener("click", function() {
        var radios = document.querySelectorAll('input[type="radio"]:checked')
//
        for (var i = 0; i < radios.length; i++) {

            if (radios[i].value == "1") {
                radios[i].parentNode.style.backgroundColor = "green"
                score++


            }
            else {
                radios[i].parentNode.style.backgroundColor = "red"
            }
        }
        scoring.innerHTML = score + " /21 ";


    })
    