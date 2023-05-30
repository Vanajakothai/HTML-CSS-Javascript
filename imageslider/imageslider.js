const leftbtn=document.querySelector(".btn-left");
const rightbtn=document.querySelector(".btn-right");
const buttons=document.querySelector(".btn");
const imagee1=document.querySelector(".images");

let pictures=["1","2","3","4","5","6"];

let count=0;

leftbtn.addEventListener("click",left);
rightbtn.addEventListener("click",right);

function right(){
    count++;
    if(count>pictures.length-1){
        count=0;
    }
    imagee1.style.background=`url("${pictures[count]}.png")`;
}
function left(){
    count--;
    if(count<0){
        count=pictures.length-1;
    }
    imagee1.style.background=`url("${pictures[count]}.png")`;
    
}