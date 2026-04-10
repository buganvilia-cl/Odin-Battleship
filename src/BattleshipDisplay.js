
import {Gameboard, Ship, Player}  from "./Battleship.js";

let pressedSize=0;
let orientation="v";


function createBoard(boardNumber){
    const boardn= document.querySelector("#board"+boardNumber);
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            let square=document.createElement("div");
            square.setAttribute('class', 'square');
            square.setAttribute('id', `s${i}-${j}`);
            square.setAttribute('content', 'W');
            square.setAttribute('display', 'U');
            boardn.appendChild(square)

            square.addEventListener('mouseover', eventHandlerHover );  
            square.addEventListener('mouseout', eventHandlerUnhover );  
        }         
    }
}

function eventHandlerHover(e){
    if(pressedSize==0){ return} 
    e.target.style.borderColor="black";
    e.target.style.zIndex=3;
    if (orientation == "v"){
            e.target.style.transform = `scale(1,${pressedSize})`;
    } else if (orientation == "h"){
            e.target.style.transform = `scale(${pressedSize},1)`;
    }
} 

function eventHandlerUnhover(e){
    e.target.style.borderColor="grey";
    e.target.style.transform = `scale(1,1)`;
    e.target.style.zIndex=0;
    
}       


function displayBoard(boardNumber , player, shipDisplay){             // shipDisplay = "S" when adding ships, "U" when playing
    const boardn= document.querySelector("#board"+boardNumber);
    let square =[];
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            square = boardn.querySelector(`#s${i}-${j}`);
            if(player.board.squares[i][j][0] =="W" && player.board.squares[i][j][1] == false ){
                square.setAttribute('display', 'U');
            }
            if(player.board.squares[i][j][0] =="W" && player.board.squares[i][j][1] == true ){
                square.setAttribute('display', 'WH');
            }
            if(player.board.squares[i][j][0] !="W" && player.board.squares[i][j][1] == true ){
                square.setAttribute('display', 'SH');
            }
            if(player.board.squares[i][j][0] !="W" && player.board.squares[i][j][1] == false ){
                square.setAttribute('display', shipDisplay);
            }
        }
    }
}



function displayShipAdd(boardNumber, player){
    let currentShip=undefined;
    const ships= document.querySelector("#ships"+boardNumber);
    ships.addEventListener('click',(e)=> {
        if(e.target.getAttribute("pressed")=="done" ){ return}
        let targetClass = e.target.className; 
        pressedSize= Number(targetClass[4]);
        currentShip =e.target
        e.target.setAttribute("pressed", "current" )
    });  

    const compu= document.querySelector("#compu"+boardNumber);
    compu.addEventListener('click',(e)=> {
        player.human=false;
        player.addAllShipsRandom();
        displayBoard(boardNumber, player, "U" );
        boardn.removeEventListener("click", eventHandlerSetup);
        initialSteps(); 
    })
    
    const random= document.querySelector("#random"+boardNumber);
    random.addEventListener('click',(e)=> {
            player.addAllShipsRandom()
            let allShips=ships.children;
            for(let ship of allShips ){
                ship.setAttribute("pressed", "done" );
            }
            currentShip = undefined;
            pressedSize=0;
            displayBoard(boardNumber, player, "S" )
        })

    const orientSpan= document.querySelector("#o"+boardNumber);
    const orientButton= document.querySelector("#ob"+boardNumber);
   
    orientButton.addEventListener('click',()=> {
        if(orientation == "v"){
            orientation = "h"
            orientSpan.innerHTML="horizontal"
        } else if(orientation == "h"){
            orientation = "v"
            orientSpan.innerHTML="vertical"
        }
    });    

    function eventHandlerSetup(e){
    if(pressedSize==0){console.log( "choose ship"); return} 
        let targetID = e.target.id; 
        let i= Number(targetID[1]);
        let j= Number(targetID[3]);  
        let set=player.board.placeShip(pressedSize, orientation , [i,j]) 
        if (set==true){
            currentShip.setAttribute("pressed", "done" );
            currentShip = undefined;
            pressedSize=0;
            displayBoard(boardNumber, player, "S" )
        }
    }  
        
    const boardn= document.querySelector("#board"+boardNumber);
    boardn.addEventListener('click', eventHandlerSetup );  
    
    const done = document.querySelector("#done"+boardNumber);
    done.addEventListener('click',(e)=> { 
        displayBoard(boardNumber, player, "U" );
        boardn.removeEventListener("click", eventHandlerSetup);
        initialSteps();    
    })
}    



let setupStep =0;
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

function initialSetup(){
    const divAdd2 = document.querySelector("#addShips2");
    createBoard(1);
    createBoard(2);
    displayBoard(1, player1, "S");
    displayBoard(2, player2, "S");
    divAdd2.style.display="none";
    displayShipAdd(1, player1);
}

function initialSteps(){
    const divAdd1 = document.querySelector("#addShips1");
    const divAdd2 = document.querySelector("#addShips2");
    pressedSize=0;
    switch(setupStep){
     case 0:    
        divAdd1.style.display="none";
        divAdd2.style.display="block";
        displayShipAdd(2, player2);
        setupStep +=1;
        break;
     case 1:
        divAdd2.style.display="none";
        displayGameInteraction(1, player1, player2);
        displayGameInteraction(2, player2, player1);
        if(player1.human == false){ 
            if(player2.human == false){computerAlone(); return};
            let move=player1.chooseMove();
            let result= player2.board.receiveAttack(move);
            player1.lastMove =[move, result];
             displayBoard(2, player2, "U");
        }
        break;
    }

}


function displayGameInteraction(boardNumber, player, against){
    if(against.human==true){
        const boardn= document.querySelector("#board"+boardNumber);
        boardn.addEventListener('click',(e)=> {
            let targetID = e.target.id; 
            if(targetID[0] != "s"){return }
            let i=targetID[1];
            let j=targetID[3];
            let attackDone = player.board.receiveAttack([i,j]);
            if (attackDone == false ){return}
            displayBoard(boardNumber , player, "U");
            if(player.board.checkWin() == true){ 
                alert( `End of game ${against.name} won`)
                displayBoard(2, player2, "S");
            }
            else if (player.human == false) { 
                let move=player.chooseMove()
                let result= against.board.receiveAttack(move);
                player.lastMove =[move, result];
                displayBoard(1+boardNumber%2 , against, "U");
                if(against.board.checkWin() == true){ 
                    alert( `End of game ${player.name} won`)
                    displayBoard(1, player1, "S");
                    displayBoard(2, player2, "S");
                }
            }
        })
    }
}


function computerAlone(){
    let step=1;
    while(true){
     if (step%2==0){
        let move=player2.chooseMove()
        let result= player1.board.receiveAttack(move);
        player2.lastMove =[move, result];
        displayBoard(1 , player1, "U");
        if(player1.board.checkWin() == true){ 
            alert( `End of game ${player2.name} won`)
            displayBoard(1, player1, "S");
            displayBoard(2, player2, "S");
            return;
        }
     } else {
        let move=player1.chooseMove()
        let result= player2.board.receiveAttack(move);
        player1.lastMove =[move, result];
        displayBoard(2 , player2, "U");
        if(player2.board.checkWin() == true){ 
            alert( `End of game ${player1.name} won`)
            displayBoard(1, player1, "S");
            displayBoard(2, player2, "S");
            return;
        }
     }
    step += 1;
    }
}    


export{createBoard, displayBoard,displayGameInteraction, displayShipAdd , initialSetup}