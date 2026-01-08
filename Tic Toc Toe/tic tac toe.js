let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector(".new-game");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;

const winnerPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const clearText=()=>{
    for(let box of boxes){
        box.innerText='';
        box.disabled=false;
    }
}

newBtn.addEventListener("click",()=>{
    clearText();
    msgContainer.classList.add("hide");
});

resetBtn.addEventListener("click",()=>{
    clearText();
});

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.style.color="red";
            box.innerText='X';
            turnO=false;
        }else{
            box.style.color="blue";
            box.innerText='O';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    } );
});
 
const disabledAllBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    if(winner==="X"){
        msg.style.color="red";
    }else{
        msg.style.color="blue";
    }
    msg.innerText="Congratulation, Winner is "+winner;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winnerPatterns){
        let pos0= boxes[pattern[0]].innerText;
        let pos1= boxes[pattern[1]].innerText;
        let pos2= boxes[pattern[2]].innerText;
        if(pos0 !== ''&& pos1!== ''&&pos2!=''){
            if(pos0===pos1&&pos1===pos2){
                showWinner(pos0);
            }
        }
    }
};


