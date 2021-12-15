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

function showResult() {
    if (resultsElement) resultsElement.style.display = "flex";
}

function hideResult() {
    resultsElement.style.display = "none";
    scoreElement.innerText = 0;
}