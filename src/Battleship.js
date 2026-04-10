const shipSizes =[5,4,4,3,3,3,2,2,2,2]; 

class Ship {
    constructor(size){
        this.size = size;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){               //returns = is it sunk? (t/f)
        this.hits+=1;
        if(this.hits >= this.size){ return true}
        else {return false} 
    }

}

class Gameboard {
    constructor(){
        this.squares=[]
        for(let i=0; i<10; i++){
            let linea=[];
            for(let j=0; j<10; j++){
                linea[j]=["W", false];
            }
            this.squares[i]=linea;
        }
        this.ships = [] 
    }

    placeShip(size, orientation , position) {    // orientation= v or h (vertical/horizontal) / position = [i,j] 
        let next=[0,1];
        let [i,j]=position;
        if (orientation == "v"){ next=[1,0]};
        for(let k=0; k<size; k++){ 
            if (this.squares[i+k*next[0]] == undefined || this.squares[i+k*next[0]][j+k*next[1]] == undefined || this.squares[i+k*next[0]][j+k*next[1]][0] !="W" ){ 
                return false;
            }
        }
        let ship = new Ship(size);   
        for(let k=0; k<size; k++){ 
            this.squares[i+k*next[0]][j+k*next[1]][0] = ship;
        }
        this.ships.push(ship); 
        return true; 
    }

    removeAllShips(){
        this.ships = [];
        this.squares=[];
        for(let i=0; i<10; i++){
            let linea=[];
            for(let j=0; j<10; j++){
                linea[j]=["W", false];
            }
            this.squares[i]=linea;
        }
    }

    receiveAttack([i,j]){
        if(this.squares[i][j][1]){ console.log( "You can´t hit same place twice"); return false } 
        this.squares[i][j][1]=true;
        if (this.squares[i][j][0]=="W"){ 
            return "W"}  
         else {
            this.squares[i][j][0].sunk = this.squares[i][j][0].hit();}
            return "S"
    }
      
    
    checkWin(){
        for(let ship of this.ships){
            if(ship.sunk == false){ return false}     
        }
        return true
    }

}

class Player {
    constructor(name) {
        this.name=name;
        this.board = new Gameboard();  
        this.human = true
        this.hittedSquares=[];
        this.nextSquares=[];
        this.lastMove=[[], "W"];
        this.hits=[];
    }

    randomSquare(){
        let i=Math.floor(Math.random()*10);
        let j=Math.floor(Math.random()*10);
        return [i,j];
    }
    
    randomOrientation(){
        let o=Math.floor(Math.random()*2);
        if (o == 0){ return "v"}
        else {return "h"}
    }

    addShipRandom(size){
        let placed=false;
        while (placed==false) {
          placed =this.board.placeShip(size, this.randomOrientation() , this.randomSquare() )   
        } 
    }

    addAllShipsRandom(){
                this.board.removeAllShips();
                for(let size of shipSizes){
                    this.addShipRandom(size);
                }
    }

    isShip([i,j]){
        if(i<0 ||i>9){return false} 
        if(j<0 ||j>9){return false} 
        for(let sqw of this.hits){
            if(i == sqw[0] && j == sqw[1]){ return true}
        }
        return false;
    }

    chooseMove(){
        if(this.lastMove[1]=="S"){
            let [li, lj]=this.lastMove[0];
            this.hits.push([li, lj]);
            if (this.isShip([li+1, lj])){
                if(li>0){this.nextSquares.push([li-1, lj])};    
            } else if  (this.isShip([li-1, lj])){
                if(li<9){ this.nextSquares.push([li+1, lj])};    
            } else if  (this.isShip([li, lj+1])){
                if(lj>0){ this.nextSquares.push([li, lj-1])};    
            } else if  (this.isShip([li, lj-1])){
                if(lj<9){this.nextSquares.push([li, lj+1])};   
            } else {
                if(li>0){this.nextSquares.push([li-1, lj])};
                if(li<9){ this.nextSquares.push([li+1, lj])};
                if(lj>0){ this.nextSquares.push([li, lj-1])};
                if(lj<9){this.nextSquares.push([li, lj+1])};
            }
            this.lastMove[1]="W";
        }

        let i=0;
        let j=0;
        if(this.nextSquares.length > 0){
            let next=this.nextSquares.pop()
            i= next[0];
            j= next[1];      //   this.nextSquares.pop()
        } else {
            [i,j] = this.randomSquare()
        }

        for(let sqw of this.hittedSquares){
            if(i == sqw[0] && j == sqw[1]){ 
                 return this.chooseMove()} 
        } 
        this.hittedSquares.push([i,j])
        return [i,j]
    }

} 



export {Gameboard, Ship, Player} 