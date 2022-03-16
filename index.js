var rules = document.getElementById("Rules");
rules.addEventListener("click",function(){
    // window.open("rules.html","_self");
    window.location.replace("rules.html");
});

const manualimage = document.querySelector(".manualimage");
const home = document.querySelector(".image");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const selected = document.querySelector(".onclicking");
selected.style.display = "none";
if(selected.style.display === "none"){
    paper.addEventListener("click",function(){
        home.style.display = "none";
        selected.style.display = "flex";
        manualimage.src = "images/icon-paper.svg";
        manualimage.classList.add("paper");
    });
    rock.addEventListener("click",function(){
        home.style.display = "none";
        selected.style.display = "flex";
        manualimage.src = "images/icon-rock.svg";
        manualimage.classList.add("rock");
    });
    scissor.addEventListener("click",function(){
        home.style.display = "none";
        selected.style.display = "flex";
        manualimage.src = "images/icon-scissors.svg";
        manualimage.classList.add("scissor");
    });
}