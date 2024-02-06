abstract class Calculadora {
    constructor(){
        //Código del constructor
    }
    abstract sumar(s1:number, s2:number):void;
    restar(r1:number, r2:number):number {
        return r1-r2;
    }
}

class CalculadoraDecimal extends Calculadora {
    sumar(s1: number, s2: number) {
        console.log("Suma decimal");
    }
}

class CalculadoraHexadecimal extends Calculadora {
    sumar(s1: number, s2: number) {
        console.log("Suma hexadecimal");
    }
}

function calcular(c:Calculadora){
    c.sumar(3,5);
}

let miCalculadora = new CalculadoraHexadecimal();
calcular(miCalculadora);