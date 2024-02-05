var nombre:string;
nombre = "Fernando";

let edad:number;
let contento:boolean;

let estado:any;//Cualquier tipo
estado = 10;//asigna un number
estado = "No sé";//asigna un string

let edades:number[] = new Array();//Array de number
//edades = 8;//ERROR
edades.push(3);
//edades.push("h");//Error

let nombres = new Array<string>();
nombres.push("Jose");
//nombres.push(8);//Error

let altura;//¿Tipo?
altura = 175;//ok
altura = "Un metro";//ok

//Tipo combinado
let argumento:string | boolean;
argumento="Un texto";
argumento=true;
//argumento=3;//ERROR

//Type aliases
type direccion = string;
let midireccion:direccion="Alcorcón";
if (midireccion==="Alcorcón"){
    console.log("Son lo mismo");
}

//Type aliases aplicado a objetos
type punto = {x:number, y:number};
let origen:punto={x:10,y:5};
let destino:punto={x:15,y:8};