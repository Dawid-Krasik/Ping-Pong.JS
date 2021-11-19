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

const paddelWidght = 20;
const paddelHeight = 100;

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

let gameStarted = false;
let gameOver = false;
let playerWon = false;

    //buttons

newGameB.addEventListener('click', function () {

    gameStarted = false;
    gameOver = false;
    playerWon = false;



newGameButton.style.display = 'none';


    ballSpeedX = 7;
    ballSpeedY = 0;
});





playAgainB.addEventListener('click', function () {
    endGame()
    newGameButton.style.display = 'inline';
});


    // Functions self descripting



    //player paddel
function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddelWidght, paddelHeight);

}
    // ai padeln
function ai() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(aiX, aiY, paddelWidght, paddelHeight);

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
        // the ball turn back when hit the right or left border

        if (ballX <= playerX + paddleWidth || ballX >= cw) {
            ballSpeedX = -ballSpeedX;
         }

}

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

    // function moving paddel

function playerPosition (e){

   // console.log("Mouse Position", + (e.clientY - topCanvas));
    playerY = e.clientY - topCanvas - paddelHeight / 2;

    // if paddelHeight hit bottom
    // the position is set to 400 and paddel do
    // not crose the table any more
    if (playerY >= ch - paddelHeight ){
        playerY = ch - paddelHeight;

    }
        // {if} the paddel dont crose top border
        if (playerY <= 0){
            playerY = 0;

        }

}

    // setting up speed after hiting borders X and Y
function speedUp(){
   // console.log(ballSpeedX +","+ ballSpeedY);

   // Speeding up X
    if (ballSpeedX > 0 && ballSpeedX < 16){
        ballSpeedX += 1;
    }
    else if (ballSpeedX < 0 && ballSpeedX > -16){
        ballSpeedX -= 1;
    }
    // Speeding up Y
    if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += 1;
    }
    else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= 1;
    }
}

    // AI it work corecly

function aiPosition(){


    const middlePaddel = aiY + paddelHeight / 2;
    const middleBall = ballY + ballSize / 2;


    if (ballX > 500){
        if (middlePaddel - middleBall > 200){
          //  console.log("more then 200");
            aiY -= 15
        }
        else if (middlePaddel - middleBall > 50){
           // console.log("between 50 - 200");
            aiY -= 5
        }
            if (middlePaddel - middleBall < -200){
                //console.log("more then -200");
                aiY += 15
            }
            else if (middlePaddel - middleBall < -50){
          //      console.log("between -50 to - 200");
                aiY += 5
            }
    }
    else if (ballX <= 500 && ballX > 150){
        if (middlePaddel - middleBall > 100){
            aiY -= 3
        }
            else if (middlePaddel - middleBall < -100){
                aiY += 3
            }
    }
}

    // funciont adding score działa
/* function score (){


    if (ballX <= 15 && aiPoints < 10) {
        aiPoints += 1;
        ballX = cw / 2 - ballSize / 2
        console.log(aiPoints + " " + "Punkty AI ");

    }

    if (ballX >= 965 && playerPoints < 10) {
        playerPoints += 1;
        ballX = cw / 2 - ballSize / 2
        console.log(playerPoints + " " + "Punkty gracza");

    }
}
*/


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
  /*
     function checkForEnd(){
        if (playerPoints >= 10){
        console.log ("Player Won");
        endGame()
         }

        if (aiPoints >= 10) {
        console.log("Computer Won");
        endGame()
        }
}
*/



canvas.addEventListener("mousemove", playerPosition)

function game (){
table()
ball()
player()
ai()
aiPosition()
//score()
//checkForEnd()
}

setInterval(game,1000 / 60)