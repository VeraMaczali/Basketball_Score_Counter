//id="home-score"
//id="home-btn1"
//id="home-btn2"
//id="home-btn3"
//id="guess-score"
//id="guess-btn1"
//id="guess-btn2"
//id="guess-btn3"                
//id="new-btn"
let homeScoreEL = document.getElementById("home-score");
let guessScoreEl = document.getElementById("guess-score");
let homeScore = 0;
let guessScore = 0;

function addHome1() {
    homeScore += 1;
    homeScoreEL.textContent = homeScore;
}
function addHome2() {
    homeScore += 2;
    homeScoreEL.textContent = homeScore;
}
function addHome3() {
    homeScore += 3;
    homeScoreEL.textContent = homeScore;
}
function addGuess1() {
    guessScore += 1;
    guessScoreEl.textContent = guessScore;
}
function addGuess2() {
    guessScore += 2;
    guessScoreEl.textContent = guessScore;
}
function addGuess3() {
    guessScore += 3;
    guessScoreEl.textContent = guessScore;
}

function reset() {
    homeScore = 0;
    guessScore = 0;
    homeScoreEL.textContent = homeScore;
    guessScoreEl.textContent = guessScore;
}