const POS_MENU_ON="0px";
const POS_MENU_OFF="-65%";
const menu = document.querySelector("#menu");
menu.onclick=function(e){
    if (menu.style.left === POS_MENU_ON) {
        menu.style.left = POS_MENU_OFF;
    } else {
        menu.style.left = POS_MENU_ON;
    }
}

let opciones = document.querySelectorAll(".opcion");
opciones.forEach(opcion => {
    opcion.addEventListener("click",(e)=>{
        document.querySelectorAll(".pantalla").forEach(pantalla => {
            console.log(pantalla.id + ":" + e.target.parentNode.getAttribute("screen"));
            if (pantalla.id==e.target.parentNode.getAttribute("screen")){
                document.querySelector(`#${pantalla.id}`).style.display = "block";
            } else {
                document.querySelector(`#${pantalla.id}`).style.display = "none";
            }
        })
    });
});