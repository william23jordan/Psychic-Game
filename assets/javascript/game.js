
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var userChoice = "";
var psychicChoice = "";

var psychic = () => {
    psychicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = (event) => {
    
    userChoice = event.key.toLowerCase();


    console.log(userChoice);

    if (userChoice === psychicChoice) {
        wins++;
        alertWin();
        }

    else {
        guessesLeft--;
        guessesSoFar.push(userChoice);
    }

    if (guessesLeft === 0) {
        losses++;
        alertLoss();
    }

    var html = 
    "<p>Guesses Left </p>" +
    "<p>"+ guessesLeft + "</p>" +
    "<p>Letters Guesses</p>" + 
    "<p>"+ guessesSoFar + "</p>" +
    // "<br>" +
    "<p>Wins </p>" + 
    "<p>"+ wins + "</p>" +
    "<p>Losses </p>" + 
    "<p>"+ losses + "</p>";

    document.querySelector("#jigsaw").innerHTML = html;

    };
}

psychic();

var resetGame = () => {
    guessesLeft = 10;
    guessesSoFar = [];
    psychic();
};

var alertWin = function() {
    alert("Nice! You guessed the right letter." + psychicChoice);
    resetGame();
}

var alertLoss = function() {
    alert("Too bad. You failed, I was thinking of " + psychicChoice);
    resetGame();
}
    
