const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;
const ballSize = 20;

function ball(){
    ctx.fillStyle = 'white';
    ctx.fillRect(cw / 2 - ballSize,ch / 2 - ballSize , ballSize, ballSize );
}
function table(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, cw, ch);
}
table()
ball()