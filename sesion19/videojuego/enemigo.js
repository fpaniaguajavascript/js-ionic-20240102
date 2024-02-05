class Enemigo {
    static velocidad = 2;
    constructor(nombre, imagen, x, y, ancho, alto, salud, ctx){
        if (arguments.length!=8){
            throw new Error(`Constructor de Enemigo ha sido mal invocado: ${arguments.length} de 8`);
        }
        this.nombre = nombre;
        this.imagen = document.getElementById(imagen);
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.salud = salud;
        this.ctx = ctx;
    }
    mover(){
        this.x = this.x + Enemigo.velocidad;
        if ((this.x>550)){
            this.x = 550;
            Enemigo.velocidad=-Enemigo.velocidad;
        } else if (this.x<0) {
            this.x = 0;
            Enemigo.velocidad=-Enemigo.velocidad
        }
        this.dibujar();
    }
    disparar(){

    }
    dibujar(){
        this.ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

}