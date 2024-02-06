class Movie {
    titulo:string;
    director:string;
    private _presupuesto:number;
    constructor(titulo:string, director:string, presupuesto:number){
        this.titulo = titulo;
        this.director = director;
        this._presupuesto = presupuesto;
    }
    get presupuesto():number{
        return this._presupuesto;
    }
    set presupuesto(nuevoPresupuesto:number){
        this._presupuesto = nuevoPresupuesto;
    }
}
let movie1:Movie = new Movie("Título","Director",10_000_000);
console.log(movie1.titulo);
console.log(movie1.presupuesto);
movie1.presupuesto=20_000_000;
console.log(movie1.presupuesto);
