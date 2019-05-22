//global variables to select elements
let coin=document.getElementsByClassName("coin"); //spinning coin on top
let turn=document.getElementsByClassName("turn"); //div saying whose turn it is // coin slots
let board=document.getElementsByClassName("board");
let reset=document.getElementsByClassName("reset"); //bottom reset button
let player1;
let player2;
var col;
var occupied;

function makeGrid(){  //create grid upon clicking submit
 for (let n=0; n<=6; n++){//add row
     $(".board").append($("<tr></tr>"));
 for (let m=0; m<7; m++){ //add column to row
     $("tr").last().append($("<td></td>"));
}  }  }


//board.addEventListener("click", function(colorChange){
//colorChange.target.style.backgroundColor = "pink";
// })
//change color on click