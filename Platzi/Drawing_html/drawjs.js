var d = document.getElementById("dibujo");
var lienzito = d.getContext("2d");
var TotalLines = 30

for (let i=0; i < TotalLines; i++) {
    x_y = 0 + (10*i);
    x_yreverse = 300 - (10*i);
    DrawLine("black", 0, x_y, x_y, 300);
    DrawLine("black", x_y, 0, 300, x_y);
    DrawLine("black", x_yreverse, 0, 0, x_y);
    DrawLine("black", 300, x_y, x_yreverse, 300);
}

function DrawLine(colour, xini, yini, xend, yend) {
    lienzito.beginPath();
    lienzito.strokeStyle = colour;
    lienzito.moveTo(xini,yini);
    lienzito.lineTo(xend,yend);;
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

