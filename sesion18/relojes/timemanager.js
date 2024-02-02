const TIEMPO_REFRESCO = 1000;

setInterval(mostrarHora,TIEMPO_REFRESCO);

const optionsNY = { timeZone: "America/New_York" }; 
const optionsMA = { timeZone: "Europe/Madrid"};
const optionsTO = { timeZone: "Asia/Tokyo"};

function mostrarHora(){
    const ahora = new Date();
    //Config localTimeString
    let ahoraNY = ahora.toLocaleTimeString("es", optionsNY);
    let ahoraMA = ahora.toLocaleTimeString("es", optionsMA);
    let ahoraTO = ahora.toLocaleTimeString("es", optionsTO);
    //Hora
    document.querySelector("#ny").innerHTML=ahoraNY;
    document.querySelector("#ma").innerHTML=ahoraMA;
    document.querySelector("#to").innerHTML=ahoraTO;
    //Segundero
    let currentSecond = ahora.getSeconds();
    document.querySelectorAll(".seconds").forEach(element => {
        element.style.width=(currentSecond*90/60)+"%";
    });
}