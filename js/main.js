let para = document.getElementById("demo");
let btn1 = document.getElementById("plus");
let btn2 = document.getElementById("decre")

var count = 0;
para.innerHTML = count;

function incre(){
    count++;
    para.innerHTML = count;
    console.log(plus);
    return count;
   
}btn1.addEventListener("click", incre);

function decre(){
    count--;
    para.innerHTML = count;
    console.log(plus);
    return count;
   
}btn2.addEventListener("click", decre);