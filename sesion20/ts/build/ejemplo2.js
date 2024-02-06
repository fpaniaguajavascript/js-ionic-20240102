class Pelicula {
    titulo;
    numeroTemporadas;
    //Constructor con argumento con valor por defecto
    constructor(_titulo, _numeroTemporadas = 0) {
        this.titulo = _titulo;
        this.numeroTemporadas = _numeroTemporadas;
    }
}
let pelicula1 = new Pelicula("Batman", 1);
let pelicula2 = new Pelicula("Batman");
class Serie {
    titulo;
    numeroTemporadas;
    //Constructor con argumento opcional
    constructor(_titulo, _numeroTemporadas) {
        this.titulo = _titulo;
        this.numeroTemporadas = _numeroTemporadas;
    }
}
let serie1 = new Serie("Friends", 2);
let serie2 = new Serie("Friends");
console.log(serie2.numeroTemporadas); //undefined
