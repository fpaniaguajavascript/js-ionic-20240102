
function findMovie(title){
    const API_KEY = 'fe486a03';
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200){
                processResponse(JSON.parse(xmlHttp.responseText));
            } else {
                console.error("Ha ocurrido un error:" + xmlHttp.status);
                throw "Ha ocurrido un error " + xmlHttp.status;
            }
        }  
    }
    xmlHttp.open("GET", encodeURI(URL), true);
    xmlHttp.send();
}
function processResponse(movie){
    console.log(movie);
}
findMovie('Star Wars'); 