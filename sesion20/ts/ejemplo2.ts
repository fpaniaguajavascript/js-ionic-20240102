class Pelicula {
    titulo:string;
    numeroTemporadas:number;
    //Constructor con argumento con valor por defecto
    constructor(_titulo:string, _numeroTemporadas:number=0){
        this.titulo = _titulo;
        this.numeroTemporadas = _numeroTemporadas;
    }
}

let pelicula1:Pelicula = new Pelicula("Batman",1);
let pelicula2:Pelicula = new Pelicula("Batman");


class Serie {
    titulo:string;
    numeroTemporadas:number;
    //Constructor con argumento opcional
    constructor(_titulo:string, _numeroTemporadas?:number){
        this.titulo=_titulo;
        this.numeroTemporadas=_numeroTemporadas;
    }
}

let serie1:Serie = new Serie("Friends",2);
let serie2:Serie = new Serie("Friends");
console.log(serie2.numeroTemporadas);//undefined

