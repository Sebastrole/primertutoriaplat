var d = document.getElementById("dibujo");
var button_js = document.getElementById("button_");
var text_digited_js = document.getElementById("text_digited");
var lienzito = d.getContext("2d");
button_js.addEventListener("click", draw_click);

function draw_click() {
    var Lineas = parseInt(text_digited_js.value);
    var Space = d.width / Lineas
    DrawAllLines(Lineas, Space);
}

function DrawAllLines(Lineas, Space) {
    for (let i=0; i < Lineas; i++) {
    x_y = 0 + (Space*i);
    x_yreverse = 300 - (Space*i);
    DrawLine("black", 0, x_y, x_y, 300, 1);
    DrawLine("black", x_y, 0, 300, x_y, 1);
    DrawLine("black", x_yreverse, 0, 0, x_y, 1);
    DrawLine("black", 300, x_y, x_yreverse, 300, 1);
    }
}

function DrawLine(colour, xini, yini, xend, yend, lineWidth) {
    lienzito.beginPath();
    lienzito.strokeStyle = colour;
    lienzito.lineWidth = lineWidth;
    lienzito.moveTo(xini,yini);
    lienzito.lineTo(xend,yend);
    lienzito.stroke();
    lienzito.closePath();
}

function DrawCircle(colour, radio, width_Line) {
    lienzito.beginPath();
    lienzito.strokeStyle = colour;
    lienzito.arc(d.width/2, d.height/2,radio,2*Math.PI,false);
    lienzito.fillStyle = colour;
    lienzito.stroke();
    lienzito.lineWidth = width_Line;
    lienzito.closePath();
}

for (i = 1; i < 13; i++) {
    DrawCircle("black", 10 + (i-1)*10, 5 );
}

