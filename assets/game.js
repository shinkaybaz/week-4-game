// First thing, variables
$(document).ready(function () {
    var computerGuess = Math.floor(Math.random() * 101 + 19);

    $('#random-number').text(computerGuess);

    // Numbers for the crystals

    var redCrystal = Math.floor(Math.random() * 11 + 1);
    var blueCrystal = Math.floor(Math.random() * 11 + 1);
    var yellowCrystal = Math.floor(Math.random() * 11 + 1);
    var greenCrystal = Math.floor(Math.random() * 11 + 1);

    // Connecting html and crystals in var

    var red = document.getElementById('red-diamond');
    var blue = document.getElementById('diamond');
    var yellow = document.getElementById('yellow-diamond');
    var green = document.getElementById('green-square');

    var score = 0;
    var wins = 0;
    var losses = 0;

    $('wins').text(wins);
    $('losses').text(losses);

    // Functions
    // Reset
    function resetGame() {
        computerGuess = Math.floor(Math.random() * 101 + 19);
        $('#random-number').text(compuerGuess);
        redCrystal = Math.floor(Math.random() * 11 + 1);
        blueCrystal = Math.floor(Math.random() * 11 + 1);
        yellowCrystal = Math.floor(Math.random() * 11 + 1);
        greenCrystal = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $('#total-score').text(score);
    };

    // Alert wins if won

    function winner() {
        alert("Yay, you won!");
        wins++;
        $('#wins').text("Wins: " + wins);
        resetGame();
    };

    // Alert lost if losses

    function loser() {
        alert("You lost :(");
        losses++;
        $('#losses').text("Losses: " + losses);
        resetGame();
    };

    // Main function for the game

    function mainGame(crystal, randomScore){
    $(crystal).on('click', function () {
        score = score + randomScore;
        $('#total-score').text(score);

        if (score === computerGuess) {
            winner();
        }

        else if (score > computerGuess) {
            loser();
        
        }
    });
    };


mainGame(red, redCrystal);
mainGame(blue, blueCrystal);
mainGame(yellow, yellowCrystal);
mainGame(green, greenCrystal);

});