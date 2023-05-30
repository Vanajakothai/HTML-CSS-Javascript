const preve1=document.querySelector(".des");
const nexte1=document.querySelector(".inc");
const resete1=document.querySelector(".reset");
const buttone1=document.querySelector(".btn");
let counte1=document.querySelector(".count");

let counts=0;

preve1.addEventListener("click",decrease);
nexte1.addEventListener("click",increase);
resete1.addEventListener("click",reset);

function increase(){
    counts++;
    counte1.innerHTML=counts;
    if(counts>0){
        counte1.style.color="green";
    }
    if(counts==0){
        counte1.style.color="black";
    }
}
function decrease( ){
    counts--;
    counte1.innerHTML=counts;
    if(counts<0){
        counte1.style.color="red";
    }
    if(counts==0){
        counte1.style.color="black";
    }
}
function reset() {
    counts=0;
    counte1.innerHTML=counts;
    counte1.style.color="black";
    
}




