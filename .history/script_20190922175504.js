const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

    canvas.width = 1000;
    canvas.hight = 500;

const cw = canvas.width;
const ch = canvas.hight;

function table(){
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0, cw, ch);
}
