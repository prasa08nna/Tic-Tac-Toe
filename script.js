let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelectorAll("#retbtn");
// let newGamebtn=document.querySelectorAll("#newgbtn");
// let msg=document.querySelectorAll(".fianlResult");
let cnt=0;
let playerO=true;
const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked")
        if(playerO){
            box.innerText="O";
            playerO=false;
        }
        else{
            box.innerText="X";
            playerO=true;
        }
        cnt=cnt+1;
        box.disabled=true;
        checkWinner();
    })
 });

 const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };

 const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };
 const resetGame=()=>{
    playerO=true;
    cnt=0;
    enableBtn();
    document.querySelector("#finalResult").innerText="";
 }
 const showWinner=(winner)=>{
    document.querySelector("#finalResult").innerText=`Congratulations,Winner is ${winner}`;
    disableBtn();
 }
 const checkWinner=()=>{
    for(let pattern of winPat){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&& pos2Val!=""&&pos3Val!="" && pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                return;
            
        }   
};
    if( cnt==9){
        document.querySelector("#finalResult").innerHTML=`Game Draw`;
    }
 }

 document.querySelector("#newgbtn").addEventListener("click",resetGame);
 document.querySelector("#retbtn").addEventListener("click",resetGame);

