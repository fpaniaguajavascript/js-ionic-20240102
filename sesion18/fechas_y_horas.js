let hoy = new Date();
let shoy = Date();
console.log(typeof hoy);//object de tipo Date
console.log(typeof shoy);//string
console.log(hoy);//Fri Feb 02 2024 16:28:47 GMT+0100 (Central European Standard Time)
console.log(shoy);//Fri Feb 02 2024 16:28:47 GMT+0100 (Central European Standard Time)

console.log(hoy.getDate());
console.log(hoy.getTimezoneOffset());
console.log(hoy.getHours());//(En el momento de la ejecución) 16
console.log(hoy.getUTCHours());//(En el momento de la ejecución) 15
const options = { timeZone: "Europe/Madrid" }; 
console.log(hoy.toLocaleString("es", options));
console.log(hoy.toLocaleTimeString("es", options));
