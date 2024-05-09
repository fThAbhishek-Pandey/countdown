const dec= document.querySelector('#dec');
const reset = document.querySelector('#reset');
const inc= document.querySelector('#inc');
const value= document.querySelector("#value");
let j=0;
dec.addEventListener('click',function(){
    j= j-1;
    value.innerHTML= j;
    value.style.color="red";
   
})
reset.addEventListener('click',function(){
    j=0;
    value.innerHTML=j;
})
inc.addEventListener('click',function(){
    j=j+1;
    value.innerHTML= j;
    value.style.color="green";
})