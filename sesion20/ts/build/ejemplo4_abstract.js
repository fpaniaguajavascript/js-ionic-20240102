class Calculadora {
}
class CalculadoraDecimal extends Calculadora {
    sumar(s1, s2) {
        console.log("Suma decimal");
    }
}
class CalculadoraHexadecimal extends Calculadora {
    sumar(s1, s2) {
        console.log("Suma hexadecimal");
    }
}
function calcular(c) {
    c.sumar(3, 5);
}
let miCalculadora = new CalculadoraHexadecimal();
calcular(miCalculadora);
