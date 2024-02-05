function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}
//sumar(true, 8);//ERROR
sumar(3, 5);
//let resultado:string = sumar(3,5);//ERROR
//Función que especifica los tipos en la declaración de los argumentos
function calcularDistancia(punto1, punto2) {
    console.log(punto1, punto2);
}
calcularDistancia({ x: 5, y: 8 }, { x: 9, y: 10 });
//Funciones con argumentos opcionales
function saludar(nombre) {
    console.log("Hola " + nombre);
}
saludar("José Rafael"); //Hola José Rafael
saludar(); //Hola undefined
//Funciones con argumentos por defecto
function despedir(nombre = "Fulano") {
    console.log("Adios " + nombre);
}
despedir("José Rafael"); //Adios José Rafael
despedir(); //Adios Fulano
function x1(a, b) {
    return a + b;
}
function calcular(punto) {
    console.log("La x es:" + punto.x);
}
calcular({ y: 3, x: 8 });
