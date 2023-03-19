var join = document.getElementById("join");
var sign = document.getElementById("sign");
var x1 = document.getElementById("x1");
var x2 = document.getElementById("x2");
var pop1 = document.getElementById("pop1");
var pop2= document.getElementById("pop2");
var switch1 = document.getElementById("switch1");
var switch2 = document.getElementById("switch2");
var get = document.getElementById("get");
var gets = document.getElementById("gets");
var invs = document.getElementById('invs');


join.addEventListener("click", function(){
    pop2.style.display = "block"
    
})

sign.addEventListener("click", function(){
    pop1.style.display = "block"
    
})

x2.addEventListener("click", function(){
    pop2.style.display = "none"
    
})

x1.addEventListener("click", function(){
    pop1.style.display = "none"
    
})

switch1.addEventListener("click", function(){
    pop2.style.display = "block";
    pop1.style.display = "none";
    
})

switch2.addEventListener("click", function(){
    pop1.style.display = "block";
    pop2.style.display = "none";
    
})

get.addEventListener("click", function(){
    pop2.style.display = "block"
    
})

gets.addEventListener("click", function(){
    pop2.style.display = "block"
    
})

function invs() {
   pop2.style.display = 'block'
    
}