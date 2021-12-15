const scoreElement = document.getElementById("score");
const instructionsElement = document.getElementById("instructions");
const textElement = document.getElementById("text");
const resultsElement = document.getElementById("results");

function hideMainMenu() {
    if (instructionsElement) instructionsElement.style.display = "none";
    if (resultsElement) resultsElement.style.display = "none";
    if (textElement) textElement.style.display = "none";
    if (scoreElement) {
        scoreElement.style.zIndex = 0;
        scoreElement.innerText = 0;
    }
}

function saveHighscore(score) {
    let highscore = localStorage.getItem('highscore') || 0;
    if (+score > +highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
    return highscore;
}

function showResult(score) {
    if (resultsElement) resultsElement.style.display = "flex";

    let highscoreOld = localStorage.getItem('highscore') || 0;
    let highscoreNew = saveHighscore(score);

    if (highscoreNew > highscoreOld) {
        resultsElement.innerHTML = `
            <div>
                <img src="./assets/images/gba.png" height="200" />
            </div>
            <div id="result">
                <h1>New Highscore</h1>
                <p style="text-align: center">
                    Score: ${ score }
                    <br/>
                    Highscore: ${ highscoreNew }
                </p>
                <p>Press R to play again.</p>
            </div>
        `;
    } else {
        resultsElement.innerHTML = `
            <div>
                <img src="./assets/images/gba.png" height="200" />
            </div>
            <div id="result">
                <h1>Game Over</h1>
                <p style="text-align: center">
                    Score: ${ score }
                    <br/>
                    Highscore: ${ highscoreNew }
                </p>
                <p>Press R to play again.</p>
            </div>
        `;
    }
}

function hideResult() {
    resultsElement.style.display = "none";
    scoreElement.innerText = 0;
}