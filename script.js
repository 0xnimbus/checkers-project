//starting place of pieces 
//This variable will define the board state 
let pieces = [1, null, 1, null, 1, null, 1, 
            null, 1, null, 1, null, 1, null, 1,
            1, null, 1, null, 1, null, 1, 
            null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, 
            null, 2, null, 2, null, 2, null, 2, 
            2, null, 2, null, 2, null, 2,  null, 
            null, 2, null, 2, null, 2, null, 2] 

//Gets Red pieces into a variable 
let redPieces = document.querySelectorAll(".red-piece")

//Places a visual piece where each red piece is 

//Gets Black pieces into a variable 
let blackPieces = document.querySelectorAll(".black-piece")

//Peice selection function 
//This function has a 50% chance of returning true 
let turn = true

function firstTurnRNG() {
    turn = Math.random() < 0.5 
    return turn 
}



function turnChanger() {
    if (turn) {
        turn = false 
        return turn 
    } else {
        turn = true 
        return turn 
    }
}
//All Functions 

//Highlights square +7 
function highlight7() {
    document.getElementById(`${cellNum + 7}`).style.backgroundColor = "green"
    highlight1 = document.getElementById(`${cellNum + 7}`)
    return highlight1 
    console.log("Highlight 7")
}
//Highlights square +9 
function highlight9() {
    document.getElementById(`${cellNum + 9}`).style.backgroundColor = "green"
    highlight2 = document.getElementById(`${cellNum + 9}`)
    return highlight2 
    console.log("Highlight 9")
}
//Highlights square +14
function highlight14() {
    document.getElementById(`${cellNum + 14}`).style.backgroundColor = "green"
    highlight1 = document.getElementById(`${cellNum + 14}`)
    return highlight1 
    console.log("Highlight 14")
}
//Highlights square 18
function highlight18() {
    document.getElementById(`${cellNum + 18}`).style.backgroundColor = "green"
    highlight2 = document.getElementById(`${cellNum + 18}`)
    return highlight2 
    console.log("Highlight 18")
}
//Highlights square -7 
function highlightMinus7() {
    document.getElementById(`${cellNum - 7}`).style.backgroundColor = "green"
    highlight1 = document.getElementById(`${cellNum - 7}`)
    return highlight1 
    console.log("Highlight 7")
}
//Highlights square -9 
function highlightMinus9() {
    document.getElementById(`${cellNum - 9}`).style.backgroundColor = "green"
    highlight2 = document.getElementById(`${cellNum - 9}`)
    return highlight2 
    console.log("Highlight 9")
}
//Highlights square -14
function highlightMinus14() {
    document.getElementById(`${cellNum - 14}`).style.backgroundColor = "green"
    highlight1 = document.getElementById(`${cellNum - 14}`)
    return highlight1 
    console.log("Highlight 14")
}
//Highlights square -18
function highlightMinus18() {
    document.getElementById(`${cellNum - 18}`).style.backgroundColor = "green"
    highlight2 = document.getElementById(`${cellNum - 18}`)
    return highlight2 
    console.log("Highlight 18")
}

//Piece Movement function for Red 
function redMove() {
    evt.target.classList.add("red-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("red-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                turn = false 
}

//Declares all variables 
let pieceEaten = false 
let selectedPiece 
let cellNum
let square1
let square2 
let team1 
let team2 
let team1true
let team2true 
let eatable1
let eatable2 
let eatable1true 
let eatable2true  
let landing1 
let landing1true 
let landing2 
let landing2true
let landing3true
let landing4true 
let highlight1 
let highlight2 
let deadPiece

const boardElement = document.querySelector(".board")
boardElement.addEventListener("click", function(evt){
    if (turn){
        //Declares Reds Turn 
        document.getElementsByClassName("turn").innerHTML = "Red Player's turn"
        if (!selectedPiece) {
            //Initial click to select piece 
            if (!evt.target.classList.contains("red-piece")) return
            selectedPiece = evt.target 
            cellNum = parseInt(evt.target.id, 10)
            
            //Green Highlight function 
            square1 = document.getElementById(`${cellNum + 7}`)
            square2 = document.getElementById(`${cellNum + 9}`)
            square1true = square1.classList.contains("playable")
            square2true = square2.classList.contains("playable")

            //Identifier to see if pieces are eatable
            eatable1 = document.getElementById(`${cellNum + 7}`)
            eatable2 = document.getElementById(`${cellNum + 9}`)

            eatable1true = eatable1.classList.contains("black-piece")
            eatable2true = eatable2.classList.contains("black-piece")

            //Identifier to see if team is near 
            team1 = square1
            team2 = square2
            team1true = eatable1.classList.contains("red-piece")
            team2true = eatable2.classList.contains("red-piece")
            console.log(team1true)
            console.log(team2true)

            //Figures out if a piece can land after eating 
            landing1 = document.getElementById(`${cellNum + 14}`)
            landing2 = document.getElementById(`${cellNum + 18}`)
            landing1true = landing1.classList.contains("black-piece")
            landing2true = landing2.classList.contains("black-piece")
            console.log(landing1true)
            console.log(landing2true)
            landing3true = landing1.classList.contains("red-piece")
            landing4true = landing2.classList.contains("red-piece") 
            console.log(landing3true)
            console.log(landing4true)

            //Movement Indicator Logic 
            if (square1true === true && square2true === true){
                //If both squares are playable turn both green 
                if (eatable2true == false && eatable1true == false ){
                    //If nothing is eatable 
                    if (team1true == false && team1true == false){
                    highlight7()
                    highlight9()
                    } else if (team1true == true && team2true == false){
                        //Left side has an allied piece so only light up +9 I have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight9()
                    } else if (team1true == false && team2true == true){
                        //Right side has an allied piece so only light up +7 have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight7()
                    }
                } else if (eatable2true == true && eatable1true == true ){
                    //Eatable 2 and 1 is true 
                    highlight18()
                    highlight14()
                } else if (eatable2true == false && eatable1true == true){
                    //Eatable 1 is true while moveable 2 is true 
                    highlight14()
                    highlight9()
                } else if (eatable2true == true && eatable1true == false){
                    //Eatable 2 is true while moveable 1 is true 
                    highlight7()
                    highlight18()
                }
            } else if (square1true === false && square2true === true){
                //If +9 is playable turn green
                if (eatable2true == false && eatable1true == false ){
                    if (team1true == false && team1true== false){
                        highlight9()
                    } else if (team1true == true && team2true == false){
                        //Left side has an allied piece so only light up +9 I have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight9()
                    } else if (team1true == false && team2true == true){
                        //Right side has an allied piece so only light up +7 have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight7()
                    }
                } 
            } else if (square1true === true && square2true === false){
                //If +7 is open turn green
                if (eatable2true == false && eatable1true == false ){
                    if (team1true == false && team1true== false){
                        highlight7()
                    } else if (team1true == true && team2true == false){
                        //Left side has an allied piece so only light up +9 I have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight9()
                    } else if (team1true == false && team2true == true){
                        //Right side has an allied piece so only light up +7 have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight7()
                    }
                }  
            } 
             //Does not highlight if it has to land on something
             if (landing1true == true) {
                highlight1.style.backgroundColor = "brown"
            } else if (landing3true == true) {
                highlight1.style.backgroundColor = "brown"
            } else if (landing2true == true){
                highlight2.style.backgroundColor = "brown"
            }else if (landing4true == true){
                highlight2.style.backgroundColor = "brown"
            }

                     
        } else if (selectedPiece) {
            
            teamKill = evt.target.classList.contains("red-piece")
            eatable = selectedPiece.classList.contains("black-piece")

            //Basic Movement Loop  
            if (teamKill) {
                selectedPiece = undefined
            } else if (teamKill == false && evt.target == square1 && eatable1true == false && eatable2true == false ){
                //Movement to green square 1 
                evt.target.classList.add("red-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("red-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                turn = false 
            } else if (teamKill == false && evt.target == square2 && eatable1true == false && eatable2true == false  ){
                // Movement to green square 2 
                evt.target.classList.add("red-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("red-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                turn = false 
            } else if (evt.target = selectedPiece){
                selectedPiece = undefined
            } else if (teamKill == false && eatable == true && evt.target == square1 && eatable1true == true && eatable2true == false) {
                //Eatable Function square1
                evt.target.classList.add("red-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("red-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                
                //Removes Eaten Piece 
                deadPiece = selectedPiece.getElementById(`${cellNum - 7}`)
                if (deadPiece.classList.contains("black-piece")) {
                    deadPiece.classList.remove("black-piece")
                }
                turn = false 
            }else if (teamKill == false && evt.target == square2 && eatable1true == false && eatable2true == true) {
                 //Eatable Function square2 
                 evt.target.classList.add("red-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("red-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                
                //Removes Eaten Piece 
                deadPiece = selectedPiece.getElementById(`${cellNum - 9}`)
                if (deadPiece.classList.contains("black-piece")) {
                    deadPiece.classList.remove("black-piece")
                }
                turn = false 

                selectedPiece = undefined
            } else {
                selectedPiece = undefined
            }

           
            
            //Green Highlight Removal 

            function highlight1removal() {
                highlight1.style.backgroundColor = "brown"
                highlight1 = undefined 
              }
              
              function highlight2removal() {
                highlight2.style.backgroundColor = "brown"
                highlight2 = undefined 
              } 
              
              highlight1removal() 
              highlight2removal() 

            //Turn End  
        } else {

        }
        //Black Turn 
    } else { 
        document.querySelector(".turn").innerHTML = "Black Player's turn"
        if (!selectedPiece) {
            if (!evt.target.classList.contains("black-piece")) return
            selectedPiece = evt.target 
            cellNum = parseInt(evt.target.id, 10)

            //Green Highlight function 
            square1 = document.getElementById(`${cellNum - 7}`)
            square2 = document.getElementById(`${cellNum - 9}`)
            square1true = square1.classList.contains("playable")
            square2true = square2.classList.contains("playable")

            //Identifier to see if pieces are eatable
            eatable1 = document.getElementById(`${cellNum - 7}`)
            eatable2 = document.getElementById(`${cellNum - 9}`)

            eatable1true = eatable1.classList.contains("red-piece")
            eatable2true = eatable2.classList.contains("red-piece")

            //Identifier to see if team is near 
            team1 = square1
            team2 = square2
            team1true = eatable1.classList.contains("black-piece")
            team2true = eatable2.classList.contains("black-piece")
            console.log(team1true)
            console.log(team2true)

            //Figures out if a piece can land after eating 
            landing1 = document.getElementById(`${cellNum - 14}`)
            landing2 = document.getElementById(`${cellNum - 18}`)
            landing1true = landing1.classList.contains("red-piece")
            landing2true = landing2.classList.contains("red-piece")
            console.log(landing1true)
            console.log(landing2true)
            landing3true = landing1.classList.contains("black-piece")
            landing4true = landing2.classList.contains("black-piece") 
            console.log(landing3true)
            console.log(landing4true)

            //Movement Indicator Logic 
            if (square1true === true && square2true === true){
                //If both squares are playable turn both green 
                if (eatable2true == false && eatable1true == false ){
                    //If nothing is eatable 
                    if (team1true == false && team1true == false){
                    highlightMinus7()
                    highlightMinus9()
                    } else if (team1true == true && team2true == false){
                        //Left side has an allied piece so only light up +9 I have no clue why this doesnt work, it returns the right values when consol logged 
                        highlightMinus9()
                    } else if (team1true == false && team2true == true){
                        //Right side has an allied piece so only light up +7 have no clue why this doesnt work, it returns the right values when consol logged 
                        highlightMinus7()
                    }
                } else if (eatable2true == true && eatable1true == true ){
                    //Eatable 2 and 1 is true 
                    highlightMinus18()
                    highlightMinus14()
                } else if (eatable2true == false && eatable1true == true){
                    //Eatable 1 is true while moveable 2 is true 
                    highlightMinus14()
                    highlightMinus9()
                } else if (eatable2true == true && eatable1true == false){
                    //Eatable 2 is true while moveable 1 is true 
                    highlightMinus7()
                    highlightMinus18()
                }
            } else if (square1true === false && square2true === true){
                //If +9 is playable turn green
                if (eatable2true == false && eatable1true == false ){
                    if (team1true == false && team1true== false){
                        highlightMinus9()
                    } else if (team1true == true && team2true == false){
                        //Left side has an allied piece so only light up +9 I have no clue why this doesnt work, it returns the right values when consol logged 
                        highlightMinus9()
                    } else if (team1true == false && team2true == true){
                        //Right side has an allied piece so only light up +7 have no clue why this doesnt work, it returns the right values when consol logged 
                        highlightMinus7()
                    }
                } 
            } else if (square1true === true && square2true === false){
                //If +7 is open turn green
                if (eatable2true == false && eatable1true == false ){
                    if (team1true == false && team1true== false){
                        highlightMinus7()
                    } else if (team1true == true && team2true == false){
                        //Left side has an allied piece so only light up +9 I have no clue why this doesnt work, it returns the right values when consol logged 
                        highlightMinus()
                    } else if (team1true == false && team2true == true){
                        //Right side has an allied piece so only light up +7 have no clue why this doesnt work, it returns the right values when consol logged 
                        highlight7()
                    }
                }  
            } 
             //Does not highlight if it has to land on something
             if (landing1true == true) {
                highlight1.style.backgroundColor = "brown"
            } else if (landing3true == true) {
                highlight1.style.backgroundColor = "brown"
            } else if (landing2true == true){
                highlight2.style.backgroundColor = "brown"
            }else if (landing4true == true){
                highlight2.style.backgroundColor = "brown"
            }

            
        } else {
            teamKill = evt.target.classList.contains("black-piece")
            eatable = selectedPiece.classList.contains("red-piece")

            //Basic Movement Loop  
            if (teamKill) {
                selectedPiece = undefined
            } else if (teamKill == false && evt.target == square1 && eatable1true == false && eatable2true == false ){
                //Movement to green square 1 
                evt.target.classList.add("black-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("black-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                turn = true
            } else if (teamKill == false && evt.target == square2 && eatable1true == false && eatable2true == false  ){
                // Movement to green square 2 
                evt.target.classList.add("black-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("black-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                turn = true
            } else if (evt.target = selectedPiece){
                selectedPiece = undefined
            } else if (teamKill == false && eatable == true && evt.target == square1 && eatable1true == true && eatable2true == false) {
                //Eatable Function square1
                evt.target.classList.add("black-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("black-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                
                //Removes Eaten Piece 
                deadPiece = selectedPiece.getElementById(`${cellNum - 7}`)
                if (deadPiece.classList.contains("black-piece")) {
                    deadPiece.classList.remove("black-piece")
                }
                turn = true
            }else if (teamKill == false && evt.target == square2 && eatable1true == false && eatable2true == true) {
                 //Eatable Function square2 
                 evt.target.classList.add("black-piece")
                console.log(evt.target)
                selectedPiece.classList.remove("black-piece")
                selectedPiece.classList.add("no-piece")
                selectedPiece = undefined 
                
                //Removes Eaten Piece 
                deadPiece = selectedPiece.getElementById(`${cellNum - 9}`)
                if (deadPiece.classList.contains("red-piece")) {
                    deadPiece.classList.remove("red-piece")
                }
                turn = true

                selectedPiece = undefined
            } else {
                selectedPiece = undefined
            }

           
            
            //Green Highlight Removal 

            function highlight1removal() {
                highlight1.style.backgroundColor = "brown"
                highlight1 = undefined 
              }
              
              function highlight2removal() {
                highlight2.style.backgroundColor = "brown"
                highlight2 = undefined 
              } 
              
              highlight1removal() 
              highlight2removal() 

            //Turn End  
            turn = true
        }

    } 
    
})




//Win Logic 
//This tracks how many pieces a player has, when a player has 0 they lose 
let redCount = 12 
let blackCount = 12 
    


// Theoretical Functions 

    //Searches Array for index of element with that number 
    //Turns spaces +7 and +9 green to show where piece can move 
    //If a piece can be eaten, Turns +14 or +18 green respectively 
    //If the piece is eaten changes pieceEaten to True and -1 from piece score 
    //If true player gets another move 
    //Reassigns piece ID number to new div 
    //Changes old div to no peice 
    //When turn ends change pieceEaten back to false 

    //Blacks Turn 
    //Turns Element ID into a number 
    //Searches Array for index of element with that number 
    //Turns spaces -7 and -9 green to show where piece can move 
    //If a piece can be eaten, Turns -14 or -18 green respectively 
    //If the piece is eaten changes pieceEaten to True and -1 from piece score 
    //If true player gets another move 
    //Reassigns piece ID number to new div 
    //Changes old div to no peice 
    //When turn ends change pieceEaten back to false 

//peice movement 
//Black peices (start at bottom peices) can move -7 to move diagonally up right or -9 to move diagonally up left   

//Red peices (start at top peices) can move +7 to move diagonally left or +9 to move diagonally right spaces 

//When eating a peice Black peices (start at bottom peices) can move -18 spaces to eat something up diagonally left to it and -14 spaces to eat 
// something up diagonally right from it 

//When eating a peice Red peices (start at top peices) can move +18 spaces to eat something down diagonally right to it and +14 spaces to eat 
// something down diagonally left from it 

//Win Logic 

//Each player has 12 peices, when a player has 0 peices they lose meaning the other player wins 
//Function will keep tally of scores, when a player loses a peice it should update the score counter 

//Variable will store how many times a player has won 

//Function will pick a number between 1 and 2 to decide who goes first 

//Reset button will be in place to reset board to default settings 