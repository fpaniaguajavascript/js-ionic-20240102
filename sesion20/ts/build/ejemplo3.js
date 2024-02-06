class Movie {
    titulo;
    director;
    _presupuesto;
    constructor(titulo, director, presupuesto) {
        this.titulo = titulo;
        this.director = director;
        this._presupuesto = presupuesto;
    }
    get presupuesto() {
        return this._presupuesto;
    }
    set presupuesto(nuevoPresupuesto) {
        this._presupuesto = nuevoPresupuesto;
    }
}
let movie1 = new Movie("Título", "Director", 10000000);
console.log(movie1.titulo);
console.log(movie1.presupuesto);
movie1.presupuesto = 20000000;
console.log(movie1.presupuesto);
