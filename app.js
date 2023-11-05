//start page script code.....

function game(){
    alert(`Plaese Kindly use your Site in full Screen  thank you...!`);
    location.href="game.html";
}

// Game page script code.....//

var randomNumber=Math.floor(Math.random()*100);
console.log(randomNumber);
var chance=10;
function check(){
    chance--;
    document.getElementById("lives").innerHTML="Remaining chance:"+chance;
    var num=(document.getElementById("input"));
    num=Number(num.value);
    if(num>100){
       alert("Please Enter valid number!");
       
    }
    else if(randomNumber==num){
         location.href="win.html";
    }
    else if(randomNumber>num){
        document.getElementById("message").innerHTML="Your Guess is low";
    }
    else if(randomNumber<num){
        document.getElementById("message").innerHTML="Your Guess is high";
    }
    if(chance==0){
        chance=10;
        location.href="loss.html";
    }
   
}

// mission finished ! and mission Accompleted !

function home(){
    location.href="index.html"
}

