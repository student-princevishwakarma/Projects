let h2=document.querySelector("h2");
let allBtns=document.querySelectorAll(".btn");
let resBtn=document.querySelector("#reset-btn")
let container=document.querySelector(".container");
let newbtn=document.querySelector("#new-game");

let gameSeq=[];
let userSeq=[];
let btnColor=["red","green","orange","blue"];

let started=false;
let level=0;

document.addEventListener("keydown",function(){
    if(started== false){
        started=true;
        newbtn.classList.add("none");
        levelUp();
    }
});

newbtn.addEventListener("click",function(){
    if(started== false){
        started=true;
        newbtn.classList.add("none");
        levelUp();
    }
});

resBtn.addEventListener("click",function(){
    h2.innerText=`Game Over..... your Level was ${level-1}, Press any key to start again! `;
    started=false;
    level=0;
    gameSeq=[];
    resBtn.classList.add("none");
    newbtn.classList.remove("none");
});

function btnFlashGame(btn){
    btn.classList.add("flashGame");
    setTimeout(function(){
        btn.classList.remove("flashGame");
    }, 300);
}

function btnFlashUser(btn){
    btn.classList.add("flashUser");
    setTimeout(function(){
        btn.classList.remove("flashUser");
    }, 300);
}

function gameOver(){
    document.querySelector("body").classList.add("gameOver");
    h2.innerText=`Game Over..... your Level was ${level-1}, Press any key to start again! `;
    setTimeout(function(){
        document.querySelector("body").classList.remove("gameOver");
    },50);
    started=false;
    level=0;
    gameSeq=[];
    resBtn.classList.add("none");
    newbtn.classList.remove("none");
}

function checkSeq(){
    if(gameSeq[userSeq.length-1]!=userSeq[userSeq.length-1]){
        gameOver();
    }
}

function btnPress(){
    if(started!=false){
    let btn=this;
    btnFlashUser(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq();

    if(gameSeq.length==userSeq.length){
        setTimeout(function(){
            levelUp();
        },100);
    }
    }
}

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function levelUp(){
    level++;
    h2.innerText="Level "+ level;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btnColor[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnFlashGame(randbtn);

    userSeq=[];

    if(level>0){
        resBtn.classList.remove("none");
    }
}