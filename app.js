//global variables to select elements
let coin=document.getElementsByClassName("coin"); //spinning coin on top
let turn=document.getElementsByClassName("turn"); //div saying whose turn it is
let slot=document.getElementsByClassName("slot"); // coin slots
let reset=document.getElementsByClassName("reset"); //bottom reset button
let player1;
let player2;
var col;
var occupied;

//onclick {bkgdChange();}

function bkgdChange(){
    let turn= 1;
    if (turn%2==1){
        slot.style.backgroundColor = "var(--p1)";
        }
    else {
        //bkgd changes color
    }
} 