class Enemigo {
    constructor(nombre, imagen, x, y, ancho, alto, salud, velocidad, ctx){
        if (arguments.length!=9){
            throw new Error(`Constructor de Enemigo ha sido mal invocado: ${arguments.length} de 9`);
        }
        this.nombre = nombre;
        this.imagen = document.getElementById(imagen);
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.salud = salud;
        this.velocidad = velocidad;
        this.ctx = ctx;
    }
    mover(){
        console.log("Moviendo...:" + this.nombre);
        this.x = this.x + this.velocidad;
        if (this.x>500){
            this.velocidad=-this.velocidad
        }
    }
    disparar(){

    }
    dibujar(){
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

}