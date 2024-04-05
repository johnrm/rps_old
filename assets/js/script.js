let rpsArray = ['rock','scissors','paper'];

/**
 * Clear the decks
 * Reset game counters
 */
let computerScore = 0;
let userScore = 0;
let computerRPS = "";
let userRPS = "";

/**
 * Play the game
 */
for (let i = 0; i < 5; i++) {
    computerRPS = computerGuess();
    userRPS = userGuess();
    pickWinner()
}
//displayWInner()
//updateScore()

/**
 * Computer has a guess
 */
function computerGuess() {
    let guess = (Math.floor(Math.random() * 3));
    console.log("computer: " + guess);
    return (rpsArray[guess]);
}

/**
 * User has a guess
 */
function userGuess() {
    let guess = (Math.floor(Math.random() * 3));
    console.log("user: " + guess);
    return (rpsArray[guess]);
}

function pickWinner() {
    console.log("Computer guessed " + computerRPS + ".");
    console.log("User guessed " + userRPS + ".");
    if (
        ((computerRPS === "rock") && (userRPS === "scissors")) ||
        ((computerRPS === "scissors") && (userRPS === "paper")) ||
        ((computerRPS === "paper") && (userRPS === "rock"))) {
        console.log("Computer wins!");
        computerScore += 1;
    } else if (
        ((userRPS === "rock" && computerRPS === "scissors")) ||
        ((userRPS === "scissors" && computerRPS === "paper")) ||
        ((userRPS === "paper" && computerRPS === "rock"))) {
        console.log("User wins!");
        userScore += 1;
    } else {
        console.log("Its a draw!");
        //        computerScore += 1;
        //        userScore += 1;
    }
    console.log("Computer " + computerScore + ". User " + userScore);
    console.log("");
}

userScore += 1;
