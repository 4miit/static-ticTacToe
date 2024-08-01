



let x = document.querySelectorAll(".box");
let y = document.querySelector("#reset");
let z = document.querySelector(".msgcontainer");
let a = document.querySelector("#msg");
let b = document.querySelector("#newbtn");

let turn = true;

const w = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,8,5],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame = () => {
    turn= true;
    enableboxes();
    z.classList.add("hide");
};


const disableboxes = () => {
    for( let b of x){
        b.disabled = true;
    }
};



const enableboxes = () => {
    for(let m of x){
        m.disabled = false;
        m.innerText="";
    }
};

const showwinner = (winner) => {
    a.innerHTML=`congratulations,Winner is ${winner}`;
    z.classList.remove("hide");
    disableboxes();
};


x.forEach((p) => {
    p.addEventListener("click", () => {
        if(turn){
            p.innerText="X";
            turn=false;
        }
        else{
            p.innerText="O";
            turn=true;
        }
        p.disabled=true;
        checkwinner();
    });
});




const checkwinner = () => {
  for(let r of w){  
      let pos1val = x[r[0]].innerText;
      let pos2val = x[r[1]].innerText;
      let pos3val = x[r[2]].innerText;
       if(pos1val !="" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            showwinner(pos1val);
        }
       }
    }
};


b.addEventListener("click", resetgame);
y.addEventListener("click", resetgame);



