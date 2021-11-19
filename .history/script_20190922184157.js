const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 500;

    // All Varibles
const cw = canvas.width;
const ch = canvas.height;
const ballSize = 20;
let ballx = cw / 2 - ballSize;
let bally = ch / 2 - ballSize;

const paddelHeight = 100;
const paddelWidght = 20;


function ball(){
    ctx.fillStyle = 'white';
    ctx.fillRect(ballx, bally , ballSize, ballSize );
}

function table(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, cw, ch);
}
table()
ball()