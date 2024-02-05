function sumar(a : number, b : number) : number {
    let resultado:number = a + b;
    return resultado;
}

//sumar(true, 8);//ERROR
sumar(3,5);
//let resultado:string = sumar(3,5);//ERROR

//Función que especifica los tipos en la declaración de los argumentos
function calcularDistancia(punto1:{x:number, y:number}, punto2:{x:number, y:number}):void{
    console.log(punto1, punto2);
}
calcularDistancia({x:5,y:8},{x:9,y:10});

//Funciones con argumentos opcionales
function saludar(nombre?:string){
    console.log("Hola " + nombre);
}

saludar("José Rafael");//Hola José Rafael
saludar();//Hola undefined

//Funciones con argumentos por defecto
function despedir(nombre:string = "Fulano"){
    console.log("Adios " + nombre);
}

despedir("José Rafael");//Adios José Rafael
despedir();//Adios Fulano


function x1(a:number, b:string){
    return a+b;
}

//Solución 'ñapa' para hacer named arguments (llamadas a argumentos por nombre)
type point = {x:number, y:number};
function calcular(punto:point){
    console.log("La x es:" + punto.x);
}

calcular({y:3,x:8});
