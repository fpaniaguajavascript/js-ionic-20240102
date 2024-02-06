interface DireccionPostal {
    calle:string,
    numero:number;
    localidad:string;
}

class Alumno {
    static readonly NUM_MS_18_AÑOS=18*365*24*60*60*1000;
    nombre:string;
    email:string;
    telefono:string;
    direccionPostal:DireccionPostal;
    private _fechaNacimiento:Date;
    constructor(
        nombre:string, 
        email:string,
        direccionPostal:DireccionPostal,
        fechaNacimiento:Date,
        telefono?:string) {
            this.nombre=nombre;
            this.email=email;
            this.direccionPostal=direccionPostal;
            this._fechaNacimiento=fechaNacimiento;
            this.telefono=telefono;
    }

    get fechaNacimiento():Date{
        if (this.isMenorDeEdad()){
            throw new Error("Es menor de edad");
        }
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento:Date){
        this._fechaNacimiento=fechaNacimiento;
    }

    public calcularCoeficiente(valor:number):number {
        return valor*2;
    }

    private obtenerEficiencia():string {
        return "La eficiencia";
    }

    private isMenorDeEdad():boolean{
        let ahoraMS = new Date().getTime();
        let nacimientoMS = this._fechaNacimiento.getTime();
        return ahoraMS-nacimientoMS<Alumno.NUM_MS_18_AÑOS;
    }
}

let direccionPostalJR:DireccionPostal = {calle:"San José",numero:18,localidad:"Madrid"};
let joseRafael:Alumno = new Alumno("José Rafael", "jr@gmail.com", direccionPostalJR, new Date(2010,12,22), "916111441");
try {
    console.log(joseRafael.fechaNacimiento);
} catch (e){
    console.error("Error al acceder a la fecha:" + e);
}