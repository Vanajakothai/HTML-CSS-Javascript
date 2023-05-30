const btne1=document.querySelector(".btn");
const bodye1=document.querySelector("body");

var colors=["pink","blue","yellow","orange","violet"];

bodye1.style.background="red";

 btne1.addEventListener("click",addcolor);

 let count=0;

 function addcolor(){
    console.log("clicked");
    //var color=parseInt(Math.random()*colors.length);
    bodye1.style.background=colors[count%colors.length];
    //bodye1.style.background=colors[color];
    count++;
 }