var traer = document.getElementById("granjita");
var canvass = traer.getContext("2d");

var fondo = {
    url: "tile.png",
    CargaOK: false
};

var vaca = {
    url: "vaca.png",
    CargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    CargaOK: false
};

var pollo = {
    url: "pollo.png",
    CargaOK: false
};

var fondoImagen = new Image();
fondoImagen.src = fondo.url;
fondoImagen.addEventListener("load",cargarFondo);

var vacaImagen = new Image();
vacaImagen.src = vaca.url;
vacaImagen.addEventListener("load",cargarVacas);

var cerdoImagen = new Image();
cerdoImagen.src = cerdo.url;
cerdoImagen.addEventListener("load",cargarcerdos);

var polloImagen = new Image();
polloImagen.src = pollo.url;
polloImagen.addEventListener("load",cargarpollos);

function cargarFondo()     
{
    fondo.CargaOK = true;    
    Draw();
}

function cargarVacas()     
{
    vaca.CargaOK = true;    
    Draw();
}

function cargarcerdos()     
{
    cerdo.CargaOK = true;    
    Draw();
}

function cargarpollos()     
{
    pollo.CargaOK = true;    
    Draw();
}

 
function Draw()     
{
    if (fondo.CargaOK == true)
    {
        canvass.drawImage(fondoImagen,0,0)  
    }
    if (vaca.CargaOK == true)
    {
        canvass.drawImage(vacaImagen, number, number)  
    }
    if (cerdo.CargaOK == true)
    {
        canvass.drawImage(cerdoImagen, number, number)  
    }
    if (pollo.CargaOK == true)
    {
        canvass.drawImage(polloImagen, number, number)
    }
}

var number = randomNumber(1, 430);

function randomNumber(min, max) 
{
    var min;
    var max;
    var result = Math.floor(Math.random()*(max - min+1)+min);
    return result;
}

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("keyup", dibujarTeclado);
var x = number;
var y = number;

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
    moverImagen(vaca,vacaImagen,dx+x,dy+y)
    x += dx;
    y += dy;
}




function moverImagen(animal, imagenToMove,PosX,PosY) 
{
    if (animal.CargaOK == true)
    {
        canvass.drawImage(imagenToMove, PosX, PosY)  
    }
}

console.log(number);