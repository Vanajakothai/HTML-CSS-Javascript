const btne1=document.querySelector(".btn");
const inpute1=document.querySelector("input");
const messagee1=document.querySelector(".message");
const errore1=document.querySelector(".error");

btne1.addEventListener("click",diplayMessage);
function diplayMessage(){
    if(inpute1.value){
        messagee1.textContent=inpute1.value;
        inpute1.value="";
}
else{
    errore1.style.display="block";
    setInterval(() => {
        errore1.style.display="none";
        
    }, 10000);
}

}






