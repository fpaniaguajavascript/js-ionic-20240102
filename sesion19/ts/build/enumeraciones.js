var Videoconsolas;
(function (Videoconsolas) {
    Videoconsolas[Videoconsolas["PlayStation5"] = 0] = "PlayStation5";
    Videoconsolas[Videoconsolas["PlayStation4"] = 1] = "PlayStation4";
    Videoconsolas[Videoconsolas["PlayStation3"] = 2] = "PlayStation3";
    Videoconsolas[Videoconsolas["XBoxSeries"] = 3] = "XBoxSeries";
    Videoconsolas[Videoconsolas["XBoxOne"] = 4] = "XBoxOne";
    Videoconsolas[Videoconsolas["NintendoSwitch"] = 5] = "NintendoSwitch";
})(Videoconsolas || (Videoconsolas = {}));
let miVideoconsola = Videoconsolas.PlayStation4;
var VideoconsolasXL;
(function (VideoconsolasXL) {
    VideoconsolasXL["PlayStation5"] = "PS5";
    VideoconsolasXL["PlayStation4"] = "PS4";
    VideoconsolasXL["PlayStation3"] = "PS3";
    VideoconsolasXL["XBoxSeries"] = "XBS";
    VideoconsolasXL["XBoxOne"] = "XBO";
    VideoconsolasXL["NintendoSwitch"] = "NS";
})(VideoconsolasXL || (VideoconsolasXL = {}));
let miVideoconsolaXL = VideoconsolasXL.PlayStation4;
if (miVideoconsolaXL === "PS4") {
    console.log("Es una PS4");
}
let miVC = VideoconsolasXL["PS3"];
if (miVC === VideoconsolasXL.PlayStation3) {
    console.log("¡BRAVO!");
}
