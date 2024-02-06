class Alumno {
    static NUM_MS_18_AÑOS = 18 * 365 * 24 * 60 * 60 * 1000;
    nombre;
    email;
    telefono;
    direccionPostal;
    _fechaNacimiento;
    constructor(nombre, email, direccionPostal, fechaNacimiento, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.direccionPostal = direccionPostal;
        this._fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }
    get fechaNacimiento() {
        if (this.isMenorDeEdad()) {
            throw new Error("Es menor de edad");
        }
        return this._fechaNacimiento;
    }
    set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }
    calcularCoeficiente(valor) {
        return valor * 2;
    }
    obtenerEficiencia() {
        return "La eficiencia";
    }
    isMenorDeEdad() {
        let ahoraMS = new Date().getTime();
        let nacimientoMS = this._fechaNacimiento.getTime();
        return ahoraMS - nacimientoMS < Alumno.NUM_MS_18_AÑOS;
    }
}
let direccionPostalJR = { calle: "San José", numero: 18, localidad: "Madrid" };
let joseRafael = new Alumno("José Rafael", "jr@gmail.com", direccionPostalJR, new Date(2010, 12, 22), "916111441");
try {
    console.log(joseRafael.fechaNacimiento);
}
catch (e) {
    console.error("Error al acceder a la fecha:" + e);
}
