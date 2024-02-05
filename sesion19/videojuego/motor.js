const URL_IMAGE = "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-space-invaders-character-game-play-png-image_5173025.png";

const canvas = document.getElementById("pantalla");
const ctx = canvas.getContext("2d");
function dibujarPantalla(){
    //Rectángulo
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 600, 800);

    //Texto
    ctx.fillStyle = "#FFFFFF";
    ctx.font ="48px serif";
    ctx.fillText("SCORE", 10,58);

    //Línea
    ctx.strokeStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(50, 700);
    ctx.lineTo(550, 700);
    ctx.stroke();
}

try {
    const ANCHO_ENEMIGO = 50;
    const NUMERO_FILAS = 4;
    const NUMERO_COLUMNAS = 8;
    let enemigos = [];
    for (let i=0;i<NUMERO_FILAS;i++){
        for (let j=0;j<NUMERO_COLUMNAS;j++) {
            enemigos.push(new Enemigo(
                "Alien"+i,"marcianito",
                j*ANCHO_ENEMIGO,i*ANCHO_ENEMIGO+ANCHO_ENEMIGO,
                ANCHO_ENEMIGO,ANCHO_ENEMIGO,
                50,ctx));
        }
    }
    setInterval(()=>{
        dibujarPantalla();
        enemigos.forEach(enemigo => {
            enemigo.mover();
        });
    },17);   
} catch (e){
    console.error(e);
}
