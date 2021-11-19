/*
 * Pong Game
 *
 * made By Dawid .K
 *
 *
 */


// DOM documents and claim Varibles
const canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");
let newGameB = document.getElementById("newGameButton"),
    playAgainB = document.getElementById("playAgainButton");

    canvas.width = 1000;
    canvas.height = 500;

    // All Varibles

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2
let ballY = ch / 2 - ballSize / 2

const paddleWidth = 20;
const paddleHieght = 100;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 0;
let ballSpeedY = 0;

let playerPoints = 0;
let aiPoints = 0;

// Cumming Next

let gameStarted = false;
let gameOver = false;
let playerWon = false;

//buttons
function music (){
    let sound = new Audio("sound.mp3");
    sound.loop = true;
    sound.autoplay = true;
    sound.volume = 0.1;
    sound.stop = true;
}

newGameB.addEventListener('click', function () {

    gameStarted = false;
    gameOver = false;
    playerWon = false;
    music()

newGameButton.style.display = 'none';

    ballSpeedX = -1;
    ballSpeedY = 1;
});

playAgainB.addEventListener('click', function () {
    endGame()
    let sound = new Audio("sound.mp3");

});


                    /* Functions self descripting Name*/


//player paddel
function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHieght);
}

// ai padeln
function ai() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHieght);
}

// Ball parameters
function ball(){
    ctx.fillStyle = 'white';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    //adding movement into the ball
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

        // setting movement in to the ball top or bottom
        if (ballY <= 0 || ballY + ballSize >= ch ){
          ballSpeedY = -ballSpeedY;
          speedUp()
        }
        // Right and Left
        if (ballX <= 0 || ballX + ballSize >= cw) {
            ballSpeedX = -ballSpeedX;
            speedUp()
        }
}

// fuction discribe table
function table(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, cw, ch);

        // stetting the table to half
        for (let linePosition = 20; linePosition < ch; linePosition +=30){
            ctx.fillStyle = 'gray'
            ctx.fillRect(cw / 2 - lineWidth / 2 , linePosition,
                         lineWidth, lineHeight)
        }
}

//offset  space
topCanvas = canvas.offsetTop;
console.log(topCanvas)

// Function leting mouse control the paddle
function playerPosition (e){

   // console.log("Mouse Position", + (e.clientY - topCanvas));
    playerY = e.clientY - topCanvas - paddleHieght / 2;

    // if paddleHieght hit bottom
    // the position is set to 400 and paddel do
    // not crose the table any more
    if (playerY >= ch - paddleHieght ){
        playerY = ch - paddleHieght;
    }
        // {if} the paddel dont crose top border
        if (playerY <= 0){
            playerY = 0;
        }
}

// setting up speed after hiting borders X and Y
function speedUp(){

   // Speeding up X
    if (ballSpeedX > 0 && ballSpeedX < 16){
        ballSpeedX += 0.2;
    }
    else if (ballSpeedX < 0 && ballSpeedX > -16){
        ballSpeedX -= 0.5;
    }
    // Speeding up Y
    if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += 0.5;
    }
    else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= 0.5;
    }
}

// AI Movement function
function aiPosition(){

    const middlePaddel = aiY + paddleHieght / 2;
    const middleBall = ballY + ballSize / 2;

    if (ballX > 500){
        if (middlePaddel - middleBall > 200){
            aiY -= 15
        }
        else if (middlePaddel - middleBall > 50){
            aiY -= 10
        }
            if (middlePaddel - middleBall < -200){
                aiY += 15
            }
            else if (middlePaddel - middleBall < -50){
                aiY += 10
            }
    }
    else if (ballX <= 500 && ballX > 150){
        if (middlePaddel - middleBall > 100){
            aiY -= 5
        }
        else if (middlePaddel - middleBall < -100){
            aiY += 5
        }
    }
}

// funciont adding score
function score (){

    if (ballX <= 20 && aiPoints < 3) {
        aiPoints += 1;
        ballX = cw / 2 - ballSize / 2
        console.log(aiPoints + " " + "Punkty AI ");
        ballSpeedX = 5;
        ballSpeedY = -5;
    }

    if (ballX >= 965 && playerPoints < 3) {
        playerPoints += 1;
        ballX = cw / 2 - ballSize / 2
        console.log(playerPoints + " " + "Punkty gracza");
        ballSpeedX = -5;
        ballSpeedY =  5;
    }
}

// funcion reseting the game
function endGame (){

    ballX = cw / 2 - ballSize / 2
    ballY = ch / 2 - ballSize / 2
    ballSpeedX = 0;
    ballSpeedY = 0;
    playerPoints = 0;
    aiPoints = 0;
    newGameButton.style.display = 'inline';
}

// funcion ending the game affter some 1 get 10 score
     function checkForEnd(){
        if (playerPoints >= 3){
        console.log ("Player Won");
        endGame()
         }

        if (aiPoints >= 3) {
        console.log("Computer Won");
        endGame()
        }
}

// function that check the pozition of the paddle and ball interact with them and return in oposit direction
 function testH(){
     // player Paddle
     if (ballX <= playerX + paddleWidth &&
         ballY >= playerY -20 &&
         ballY <= playerY + paddleHieght ||
         ballX >= cw)
         ballSpeedX = -ballSpeedX;
    //Ai Paddle
    if (ballX >= aiX - paddleWidth &&
         ballY >= aiY - 20 &&
         ballY <= aiY + paddleHieght ||
         ballX >= cw)
         ballSpeedX = -ballSpeedX;
 }




canvas.addEventListener("mousemove", playerPosition)

function game (){
table()
ball()
player()
ai()
aiPosition()
score()
checkForEnd()
testH()
}

setInterval(game,1000 / 60)

            /*

        Pland to do lista :
    -dodać dzwiek do gry
    -dodać dzwiek do odbijania piłeczki
    -dodać okno z punktami
    -dodać poziomy trudności
    -zoptymalizować przyciski


            */