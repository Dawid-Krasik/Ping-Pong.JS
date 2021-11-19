const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 500;

    // All Varibles

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballx = cw / 2 - ballSize / 2
let bally = ch / 2 - ballSize / 2

const paddelWidght = 20;
const paddelHeight = 100;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 5;
let ballSpeedY = 5;

    // Functions self descripting

function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddelWidght, paddelHeight);
}

function ai() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(aiX, aiY, paddelWidght, paddelHeight);
}
function ball(){
    ctx.fillStyle = 'white';
    ctx.fillRect(ballx, bally , ballSize, ballSize);

    //adding movement into the ball
    ballx = ballx + ballSpeedX;
    bally = bally + ballSpeedY;

        // setting movement in to the ball
        if (bally <= 0 || bally + ballSize >= ch ){
                ballSpeedY = -ballSpeedY;
                speedUp()
            }
                if (ballx <=0 || ballx + ballSize >= cw){
                    ballSpeedX = -ballSpeedX;
                    speedUp()
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

    //offset top space

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
             aiY = playerY;
}

function speedUp(){
    console.log("speeding up")
}



canvas.addEventListener("mousemove", playerPosition)

function game (){
table()
ball()
player()
ai()
}

setInterval(game,1000 / 60)