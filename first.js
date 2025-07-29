let boxes=document.querySelectorAll(".box");
let resetbutn=document.querySelector(".reset");
let newbtn=document.querySelector(".new-butn");
let container = document.querySelector(".msg-container");
let para1=document.querySelector("#msg");
console.log(container);

let turn0=true ; 
let winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();

    })

});
const displayWinner=(winner)=>{
    para1.innerText=`Congratulations,Your Winner Is ${winner}`;
    para1.classList.add("glow-msg");
    container.classList.remove("hide");


}
const checkDraw = () => {
    let allFilled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        para1.innerText = "Game Drawn!";
        container.classList.remove("hide");
    }
};
const checkwinner = () => {
    let isWinner = false;

    for (let pattern of winningpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                isWinner = true;
                displayWinner(pos1val);
                
                boxes[pattern[0]].classList.add("highlight");
                boxes[pattern[1]].classList.add("highlight");
                boxes[pattern[2]].classList.add("highlight");
                boxes.forEach((box, idx) => {
                    if (!pattern.includes(idx)) {
                        if (box.innerText !== "") {
                            box.innerText = "";
                        }
                    }
                    box.disabled = true;
                });
                



               
            }
        }
    }

    if (!isWinner) {
        checkDraw();
    }
};

newbtn.addEventListener("click",()=>{
    ResetGame();
})
resetbutn.addEventListener("click",()=>{
    ResetGame();
})
const ResetGame=()=>{
    turn0=true;
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
        i.classList.remove("highlight");
    }
    container.classList.add("hide");

}








