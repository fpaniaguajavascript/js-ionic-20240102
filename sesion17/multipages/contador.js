function arrancarContador(){
    let contador = 3;
    document.querySelector("#temporizador").innerHTML=contador;
    let interval = setInterval(()=>{
        contador--;
        if (contador==-1){
            clearInterval(interval);
            document.querySelector("#portada").style.display = "none";
        } else {
            document.querySelector("#temporizador").innerHTML=contador;
            console.log("han transcurrido 1000ms");
        }
    },1000);
}
arrancarContador();