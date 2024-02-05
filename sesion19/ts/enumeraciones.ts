enum Videoconsolas {
    PlayStation5,
    PlayStation4,
    PlayStation3,
    XBoxSeries,
    XBoxOne,
    NintendoSwitch
}

let miVideoconsola:Videoconsolas = Videoconsolas.PlayStation4;

enum VideoconsolasXL {
    PlayStation5="PS5",
    PlayStation4="PS4",
    PlayStation3="PS3",
    XBoxSeries="XBS",
    XBoxOne="XBO",
    NintendoSwitch="NS"
}

let miVideoconsolaXL:VideoconsolasXL = VideoconsolasXL.PlayStation4;
if(miVideoconsolaXL==="PS4"){
    console.log("Es una PS4");
}