const scoreElement = document.getElementById("score");
const instructionsElement = document.getElementById("instructions");
const textElement = document.getElementById("text");
const resultsElement = document.getElementById("results");

const graphicSettingsElement = document.getElementById('settings');
const enableFogCheckbox = document.getElementById('enable_fog');
const enableShadowCheckbox = document.getElementById('enable_shadow');

const loaderProgress = document.getElementById('loader_progress');

if (graphicSettingsElement) graphicSettingsElement.style.display = "none";

enableFogCheckbox.addEventListener('change', updateGraphicSettings);
enableShadowCheckbox.addEventListener('change', updateGraphicSettings);

let onUpdateGraphicSettings;

function updateGraphicSettings() {
    if (graphicSettingsElement) graphicSettingsElement.style.display = "block";

    console.log('update graphic settings');

    ENABLE_FOG = enableFogCheckbox.checked;
    ENABLE_SHADOW = enableShadowCheckbox.checked;

    if (onUpdateGraphicSettings !== undefined) {
        onUpdateGraphicSettings(false);
    }
}

function hideMainMenu() {
    if (graphicSettingsElement) graphicSettingsElement.style.display = "none";
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
    if (graphicSettingsElement) graphicSettingsElement.style.display = "block";
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
                <p style="text-align: center">Tap anywhere<br/> or press R to play again.</p>
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
                <p style="text-align: center">Tap anywhere<br/> or press R to play again.</p>
            </div>
        `;
    }
}

function hideResult() {
    if (graphicSettingsElement) graphicSettingsElement.style.display = "none";
    resultsElement.style.display = "none";
    scoreElement.innerText = 0;
}