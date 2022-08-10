//starting place of pieces 

let pieces = [1, null, 2, null, 3, null, 4, 
            null, 5, null, 6, null, 7, null, 8,
            9, null, 10, null, 11, null, 12, 
            null, null, null, null, 
            null, null, null, null, 
            null, 13, null, 14, null, 15, null, 16, 
            17, null, 18, null, 19, null, 20,  null, 
            null, 21, null, 22, null, 23, null, 24 
] 

//peice movement 
//Black peices (start at bottom peices) can move -7 to move diagonally right or -9 to move diagonally left   

//Red peices (start at top peices) can move +7 to move diagonally left or +9 to move diagonally right spaces 

//When eating a peice Black peices (start at bottom peices) can move -18 spaces to eat something up diagonally left to it and -14 spaces to eat 
// something up diagonally right from it 

//When eating a peice Red peices (start at top peices) can move +18 spaces to eat something down diagonally right to it and +14 spaces to eat 
// something down diagonally left from it 

//Gets Red peices into a variable 
let redPieces = document.querySelectorAll(".red-piece")
console.log(redPieces)

let blackPieces = document.getElementsByClassName("black-piece")
console.log(blackPieces)

//Win Logic 

//Each player has 12 peices, when a player has 0 peices they lose meaning the other player wins 
//Function will keep tally of scores, when a player loses a peice it should update the score counter 

//Variable will store how many times a player has won 

//Function will pick a number between 1 and 2 to decide who goes first 

//Reset button will be in place to reset board to default settings 