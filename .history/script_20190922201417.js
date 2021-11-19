const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

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
const aix = 910;

let playery = 200;
let aiy = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 5;
let ballSpeedY = 5;

    // Functions self descripting

function player() {
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playery, paddelWidght, paddelHeight);
}

function ai() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(aix, aiy, paddelWidght, paddelHeight);
}
function ball(){
    ctx.fillStyle = 'white';
    ctx.fillRect(ballx, bally , ballSize, ballSize);

    //adding movement into the ball

    ballx = ballx + ballSpeedX;
    bally = bally + ballSpeedY;

    // seting space to for the ball

        if (bally <= 0 || bally + ballSize >= ch ){
                ballSpeedY = -ballSpeedY;
            }
                if (ballx <=0 || ballx = ballSize >= cw){
                    ballSpeedX = -ballSpeedX;
                }
}

function table(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, cw, ch);

        for (let linePosition = 20; linePosition < ch; linePosition +=30){
            ctx.fillStyle = 'gray'
            ctx.fillRect(cw / 2 - lineWidth / 2 , linePosition,
                         lineWidth, lineHeight)
        }
}


function game (){
table()
ball()
player()
ai()
}

setInterval(game,1000 / 60)