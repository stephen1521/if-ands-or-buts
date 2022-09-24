const prompt = require('prompt-sync')({sigint: true});
let player1 = String(prompt('Player 1, enter "rock, "paper", or "scissors": ' ));
let player2 = String(prompt('Player 2, enter "rock", "paper", or "scissors": ' ));
let r = 'rock';
let p = 'paper';
let s = 'scissors';
// check if valid input
if((player1 === r || player1 === p || player1 === s) && (player2 ===r || player2 === p || player2 === s)){
    // draw
    if(player1 === player2) {
        console.log('Draw!!')
    // player 1 wins
    } else if((player1 === r && player2 === s) || (player1 === p && player2 === r) || (player1 === s && player2 === p)) {
        console.log('Player 1 wins!!');
    // player 2 wins
    } else {
        console.log('Player 2 wins!!');
    }
} else{
    console.log('Failure!!')
}

