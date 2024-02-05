//Object Type
let coordenada : {x:number, y:number};
coordenada = {x:8,y:10};

type posicion = {x:number, y:number};
let miPosicion:posicion = {x:10,y:15};

//Interfaces
interface Punto {
    x: number;
    y: number;
    (source: string, subString: string): boolean;
    (source: string, subString: string): boolean;
}
let posicionJR:Punto;
posicionJR.x=8;
posicionJR.y=10;

interface Punto3D extends Punto {
    z: number;
}
