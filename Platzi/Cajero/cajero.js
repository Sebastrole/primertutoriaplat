var imagenes = [];
imagenes["10"] = "dollar10.png"
imagenes["20"] = "dollar20.png"
imagenes["50"] = "dollar50.png"
imagenes["100"] = "dollar100.png"

class billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }

}

var caja = [];
caja.push(new billete(100, 20));
caja.push(new billete(50, 14));
caja.push(new billete(20, 10));
caja.push(new billete(10, 10));

var entregado = [];
var remanente = [];
var divi = 0;
var papeles = 0;
var b = 0;
var dinRestante = 0;
var dincaja = 0;

const botonn = document.getElementById("botRetirar");
botonn.addEventListener("click", entregarDinero);

const resultado = document.getElementById("resultado");

const numbers = document.getElementById("numbers");

const tomedin = document.getElementById("tomedin");

const datosDin = document.getElementById("datosDin");

const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");

num0.onclick = function () {
    numbers.textContent += 0;
}
num1.onclick = function () {
    numbers.textContent += 1;
}
num2.onclick = function () {
    numbers.textContent += 2;
}
num3.onclick = function () {
    numbers.textContent += 3;
}
num4.onclick = function () {
    numbers.textContent += 4;
}
num5.onclick = function () {
    numbers.textContent += 5;
}
num6.onclick = function () {
    numbers.textContent += 6;
}
num7.onclick = function () {
    numbers.textContent += 7;
}
num8.onclick = function () {
    numbers.textContent += 8;
}
num9.onclick = function () {
    numbers.textContent += 9;
}


for (const it of caja) {
    dincaja += it.valor * it.cantidad;
}

datosDin.innerHTML = `<p>$caja: ${dincaja} $Retiro: ${b}</p>`

function entregarDinero() {
    tomedin.innerHTML = ``;
    resultado.textContent = " ";
    let dinero = parseInt(numbers.textContent);
    if (dinero % 10 !== 0) {
        tomedin.innerHTML = "INTRODUZCA MÚLTIPLOS DE 10";
    } else
        if (dinero > dincaja) {
            tomedin.innerHTML = `EL CAJERO NO CUENTA CON ESE DINERO XD`;
        } else if (dinero == 0) {
            tomedin.innerHTML = `¿CÓMO VAS A RETIRAR 0?`;
        } else
            if (dinero > 0) {
                for (var iterator of caja) {
                    divi = Math.floor(dinero / iterator.valor);
                    if (divi > iterator.cantidad) {
                        papeles = iterator.cantidad;
                        iterator.cantidad = 0;
                    } else {
                        papeles = divi;
                        iterator.cantidad -= papeles;
                    }
                    entregado.push(new billete(iterator.valor, papeles));
                    //AUN NO SE COMO HACER QUE CAJA VAYA ELIMINANDO LOS BILLETES QUE VA ENTREGANDO, LUEGO VOLVERE.
                    //a = iterator.cantidad - papeles;
                    // console.log(entregado, "entregado");
                    //remanente.push(new billete(iterator.valor, a));
                    // console.log(remanente, "remanente");
                    dinero = dinero - (iterator.valor * papeles);
                    dincaja = dincaja - (iterator.valor * papeles);
                    b += iterator.valor * papeles;
                }
                console.log(caja, "caja")
                console.log(entregado, "entregado")
                console.log(b, "b");
                //console.log(entregado, "entregado");
                //console.log(remanente, "remanente");

                // for (const index of remanente) {
                //     dinRestante += index.valor*a;
                // }

                // console.log(dinRestante);
                if (dinero == 0) {
                    for (var iterator2 of entregado) {
                        if (iterator2.cantidad > 0) {

                            for (var i = 0; i < iterator2.cantidad; i++) {
                                resultado.innerHTML = `${resultado.innerHTML}  <img src="${iterator2.imagen.src}" class="imagenes"/>`;
                            }
                            if (iterator2.cantidad == 1) {
                                resultado.innerHTML += `<h1>Retiró ${iterator2.cantidad} billete de ${iterator2.valor}</h1>`;
                            } else {
                                resultado.innerHTML += `<h1>Retiró ${iterator2.cantidad} billetes de ${iterator2.valor}</h1>`;
                            }
                        }
                    }
                    tomedin.innerHTML = `TOME SU DINERO ABAJO`; 
                }
            } /* else 
    {
        tomedin.innerHTML = "No tengo tanto dinero XD";   
    } */
    numbers.textContent = " ";
    datosDin.innerHTML = `<p>$caja: ${dincaja} $Retiro: ${b}</p>`
}



//Things for complete my atm:  1, Disminuir tamaño de los billetes. 2, Acomodar el tamaño del cajero. 3, Acomodar los números en el cajero. 4, Acomodar el cuadro donde va el resultado. 6, Crear un div que muestre las transaciones que ha hecho. 7, Restar el dinero y los billetes que se estan sacando. 8, Permitir ingresar la cantidad de billetes iniciales al cajero.