
// Se crea una clase para agrupar caracteristicas que se repiten en un mismo pokemon (this juega un papel importante)
class pokedex 
{
    constructor(nombre, ataque, vida)
    {
        this.imagen = new Image();
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;

        this.imagen.src = Imagenes[this.nombre];
    }  
    hablar()
    {
        console.log(this.nombre);
    }  
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>")
        document.write("Nombre: " + this.nombre);
        document.write("</br>" + "Vida: " + this.vida + "</br>");
        document.write( "Ataque: " + this.ataque + "<hr />" );
        document.write("</p>")
    }
}

