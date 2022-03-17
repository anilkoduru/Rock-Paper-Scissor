var rules = document.getElementById("Rules");
rules.addEventListener("click",function(){
    // window.open("rules.html","_self");
    window.location.replace("rules.html");
});

const manualimage = document.querySelector(".manualimage");
const systemimage = document.querySelector(".systemimage");
const home = document.querySelector(".image");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const selected = document.querySelector(".onclicking");
const points = document.getElementById("score");
home.style.display = "block";
selected.style.display = "none";
var winorlose = document.querySelector(".winorlose");
var currentscore = 0;
function score(){
    if(winorlose.innerHTML === "YOU WIN"){
        currentscore = currentscore + 1;
        points.innerHTML = currentscore;
    }
    else if(winorlose.innerHTML === "YOU LOSE"){
        currentscore = currentscore - 1;
        points.innerHTML = currentscore;
    }
}
function ifloseorwin(){
    if((manualimage.classList[0] == "rock" && systemimage.classList[0] == "scissor")){
        winorlose.innerHTML = "YOU WIN";
        score();
    }
    if((manualimage.classList[0] == "rock" && systemimage.classList[0] == "paper")){
        winorlose.innerHTML = "YOU LOSE";
        score();
    }
    if((manualimage.classList[0] == "paper" && systemimage.classList[0] == "rock")){
        winorlose.innerHTML = "YOU WIN";
        score();
    }
    if((manualimage.classList[0] == "paper" && systemimage.classList[0] == "scissor")){
        winorlose.innerHTML = "YOU LOSE";
        score();
    }
    if((manualimage.classList[0] == "scissor" && systemimage.classList[0] == "paper")){
        winorlose.innerHTML = "YOU WIN";
        score();
    }
    if((manualimage.classList[0] == "scissor" && systemimage.classList[0] == "rock")){
        winorlose.innerHTML = "YOU LOSE";
        score();
    }
    if((manualimage.classList[0] == "scissor" && systemimage.classList[0] == "scissor")){
        winorlose.innerHTML = "DRAW";
    }
    if((manualimage.classList[0] == "rock" && systemimage.classList[0] =="rock")){
        winorlose.innerHTML = "DRAW";
    }
    if((manualimage.classList[0] == "paper" && systemimage.classList[0] == "paper")){
        winorlose.innerHTML = "DRAW";
    }
}
function randompick(){
    var housepicked = Math.floor(Math.random()*3) + 1;
    if(housepicked === 1){
        systemimage.src = "images/icon-paper.svg";
        systemimage.classList.remove("systemimage");
        systemimage.classList.add("paper");
    }
    if(housepicked === 2){
        systemimage.src = "images/icon-rock.svg";
        systemimage.classList.remove("systemimage");
        systemimage.classList.add("rock");
    }
    if(housepicked === 3){
        systemimage.src = "images/icon-scissors.svg";
        systemimage.classList.remove("systemimage");
        systemimage.classList.add("scissor");
    }
    ifloseorwin();
}

if(selected.style.display === "none"){
    paper.addEventListener("click",function(){
        home.style.display = "none";
        selected.style.display = "flex";
        manualimage.src = "images/icon-paper.svg";
        manualimage.classList.remove("manualimage");
        manualimage.classList.add("paper");
        setTimeout(() => decider.style.visibility = "initial",1000);
        rules.style.marginTop = "50px";
        setTimeout(randompick,2000);
    });
    rock.addEventListener("click",function(){
        home.style.display = "none";
        selected.style.display = "flex";
        manualimage.src = "images/icon-rock.svg";
        manualimage.classList.remove("manualimage");
        manualimage.classList.add("rock");
        setTimeout(() => decider.style.visibility = "initial",1000);
        rules.style.marginTop = "50px";
        setTimeout(randompick,2000);
    });
    scissor.addEventListener("click",function(){
        home.style.display = "none";
        selected.style.display = "flex";
        manualimage.src = "images/icon-scissors.svg";
        manualimage.classList.remove("manualimage");
        manualimage.classList.add("scissor");
        setTimeout(() => decider.style.visibility = "initial",1000);
        rules.style.marginTop = "50px";
        setTimeout(randompick,1000);
    });
}

const decider = document.querySelector(".decider");
decider.style.visibility = "hidden";

var playagain = document.querySelector(".playagain");
playagain.addEventListener("click",function(){
    // window.location.replace("index.html");
    home.style.display = "block";
    selected.style.display = "none";
    decider.style.visibility = "hidden";
    rules.style.marginTop = "20px";
    manualimage.classList.remove(manualimage.classList[0]);
    systemimage.classList.remove(systemimage.classList[0]);
});
var restart = document.querySelector("#restart");
restart.addEventListener("click",function(){
    window.location.replace("index.html");
});