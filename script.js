// GENERATE RANDOM NUMBER AREA
const generateNumber = document.getElementById("input-generate-number");


generateNumber.addEventListener('click',function(){
    
        const randomNumber = Math.floor(Math.random()*9999);
        if(randomNumber>999){
            document.getElementById("input-text").value = randomNumber;
        } 
})

// CALC BODY AREA section

function inputButtonNumber(id){
    return document.getElementById(id);
}

function buttonEventHandler(){
    var buttonNumber = document.getElementsByClassName('button'); 

    for (var i = 0; i < buttonNumber.length; i++) { 
      buttonNumber[i].addEventListener('click', function(event) {
        
        let numberButton = event.target.innerHTML;
        if(numberButton === "C"){
            return inputButtonNumber("submit-text-area").value = "";
        }else if(numberButton ==="&lt;"){
            let areaTextNumber = document.getElementById("submit-text-area");
            return inputButtonNumber("submit-text-area").value = areaTextNumber.value.slice(0,areaTextNumber.value.length - 1);
        }
        else{
            inputButtonNumber("submit-text-area").value += numberButton;
        }
      }); 
    }
}
buttonEventHandler();

//  GENERATE NUMBER RESULT
let countNumber = 3;
function matchPin(){
    let generateRandomPin = inputButtonNumber("input-text").value;
    let submitNumberPin = inputButtonNumber("submit-text-area").value;
    if(generateRandomPin === submitNumberPin){
        inputButtonNumber("correct-pin").style.display = "block";
    }else{
        if (countNumber === 1){
            document.getElementById("disabled").disabled = true;
        }
        countNumber--;
        document.querySelector("span").innerText = countNumber;

        inputButtonNumber("not-match-pin").style.display = "block";
    }
}