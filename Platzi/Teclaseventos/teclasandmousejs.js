document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("mousemove", dibujarMouse);
var canvvas = document.getElementById("lienzo");
var papel = canvvas.getContext("2d");
var x = 150
var y = 150

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var teclado = {};
var mouse = {};

function dibujarTeclado(eventKeyboard) {
    teclado[eventKeyboard.keyCode] = eventKeyboard.type == 'keydown';
    if(eventKeyboard.type == 'keyup') {
      return;
    }
    var movimientoTeclado = 10;
    var dy = 0;
    var dx = 0;
    if (teclado[teclas.UP]) {
        dy = -movimientoTeclado;
    }
    if(teclado[teclas.DOWN]) {
        dy = movimientoTeclado;
    }
    if(teclado[teclas.RIGHT]) {
        dx = movimientoTeclado;
    }
    if(teclado[teclas.LEFT]) {
        dx = -movimientoTeclado;
    }
    colour = "black";
    DrawLine("colour", x, y, x + dx, y + dy, 1, papel);
    x += dx;
    y += dy;
}

function dibujarMouse(eventMouse) {
    if (eventMouse.buttons == 1) {
        var xCircle = eventMouse.offsetX;
        var yCircle = eventMouse.offsetY;
        DrawCircle("black", xCircle , yCircle , 3,  5 , papel);
    }
}


function DrawLine(colour, xini, yini, xend, yend, lineWidth, lienzito) {
    lienzito.beginPath();
    lienzito.strokeStyle = colour;
    lienzito.lineWidth = lineWidth;
    lienzito
    lienzito.moveTo(xini,yini);
    lienzito.lineTo(xend,yend);
    lienzito.stroke();
    lienzito.closePath();
}

function DrawCircle(colour, x, y, pointSize, width_Line, lienzito) {
    lienzito.beginPath();
    lienzito.strokeStyle = colour;
    lienzito.arc(x, y, pointSize, 0, Math.PI * 2, true);
    lienzito.fillStyle = colour;
    lienzito.stroke();
    lienzito.lineWidth = width_Line;
    lienzito.closePath();
}


DrawLine("black", 0, 0, 0, 300, 3, papel);
DrawLine("black", 0, 0, 300, 0, 3, papel);
DrawLine("black", 300, 300, 300, 0, 3, papel);
DrawLine("black", 0, 300, 300, 300, 3, papel);