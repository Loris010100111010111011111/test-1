let score = 0;
let yellowBalloon = 0;
let balloons = document.querySelectorAll(".yellowBalloon, .redBalloon, .greenBalloon"); 
let restartButton = document.getElementById("restart");
let scoreBoard = document.getElementById("scoreBoard");
let message = document.getElementById("wrapper");

balloons.forEach(balloon => {
    balloon.addEventListener('mouseover', startGame);
});

restartButton.addEventListener('mousedown', restartGame);

function startGame(pEvent) {
    if (pEvent.target.classList.contains("yellowBalloon")) {
        pEvent.target.style.visibility = "hidden"; 
        scoreBoard.textContent = score;
        yellowBalloon = yellowBalloon  + 5; 
        score += 5;
    } else if (pEvent.target.className == "redBalloon" ){
        pEvent.target.style.visibility = "hidden"; 
        score = -7;
alert("You have to click on the yellow balloon!");
    } else if (pEvent.target.classList.contains("greenBalloon")) {
        pEvent.target.style.visibility = "hidden"; 
        score = - 5; 
    }
    scoreBoard.textContent = score; 
    endGame(); 
}

function restartGame() {
    location.reload();
}

function endGame() {
    if (score == 20) { 
        message.textContent = "Congratulations! You have clicked all the balloons!";
        message.style.visibility = "visible";
        message.style.backgroundColor = "green";
        message.style.height = "400px";
        message.style.width = "500px";
        message.style.color = "white";
        message.style.fontSize = "30px";
        message.style.textAlign = "center";
        message.style.paddingTop = "150px";
        message.style.marginLeft = "200px";
        message.style.borderRadius = "20px";
    }
}


const signupButton = document.querySelector('.loginButton');
const loginButton = document.querySelector('.loginButton');