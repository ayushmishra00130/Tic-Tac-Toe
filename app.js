let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "#41393C";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#0D6D6B";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
let moveCount = 1;
const checkWinner = () => {
    moveCount = 1;
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== ""){
            moveCount++;
        

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner" , pos1Val);
                    showWinner(pos1Val);
                    return;
                }

            }
        }
    }

    if(moveCount === 9){
        msg.innerText = "This Game is a Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

newBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click" , resetGame);
