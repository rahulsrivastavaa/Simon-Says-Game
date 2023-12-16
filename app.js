let userSeq=[];
let gameSeq=[];

let btns=["red", "yellow", "purple", "green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //Random buttom
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(indx){
    if(gameSeq[indx]==userSeq[indx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,500);
       }
    } else{
        h2.innerHTML=`Game Over! Your score is ${level} <br> Press any other key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}