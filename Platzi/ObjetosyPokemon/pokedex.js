// Creo un array donde guardo las imagenes y los espacios del array no son números sino strings
var Imagenes = [];
Imagenes["Vaca"] = "Vaca.png";
Imagenes["Pollo"] = "Pollo.png";
Imagenes["Cerdo"] = "Cerdo.png";

/*var Pollo = (new pokedex("Pollo",20,100));
var Cerdo = (new pokedex("Vaca",20,100));
var Vaca = (new pokedex("Cerdo", 20 , 100));
Pollo.mostrar();
Vaca.mostrar();
Cerdo.mostrar();
*/

console.log(pokedex);

// Creo un array donde se guardan todos los pokemons, con el push se manda todo al final sucesivamente
var coleccion = [];
coleccion.push(new pokedex("Pollo",20,100));
coleccion.push(new pokedex("Vaca",20,100));
coleccion.push(new pokedex("Cerdo", 20 , 100));

// Un for para objetos, con in me muestra el indice con of me muestra directamente el objeto

for (var iterator of coleccion) {
    iterator.mostrar();
}
