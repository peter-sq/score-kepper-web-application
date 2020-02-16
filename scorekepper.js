var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var para = document.querySelector("p");
var numb = document.querySelector("input");
var scores = document.querySelector("p span");
var display1 = document.querySelector("#display1");
var display2 = document.querySelector("#display2");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winner = 5;

p1.addEventListener("click", function(){
    if(!gameover){
    p1score++;
    if(p1score === winner){
        display1.classList.add("winner");
        gameover = true;
    }
    }
    display1.textContent = p1score;
});

p2.addEventListener("click", function(){
    if(!gameover){
    p2score++;
    if(p2score === winner){
        display2.classList.add("winner");
        gameover = true;
    }
}
    display2.textContent = p2score;
});
p3.addEventListener("click", function(){
  reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove("winner");
    display2.classList.remove("winner");
    gameover = false;
}

numb.addEventListener("change", function(){
    scores.textContent = numb.value;
    winner = Number(numb.value);
    reset(); 
});




    

