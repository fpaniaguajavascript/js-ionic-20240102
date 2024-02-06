let nombre = "Jonathan";
let edad = 28;
var Equipo;
(function (Equipo) {
    Equipo[Equipo["REAL_MADRID"] = 0] = "REAL_MADRID";
    Equipo[Equipo["ATLETICO_MADRID"] = 1] = "ATLETICO_MADRID";
    Equipo[Equipo["RAYO_VALLECANO"] = 2] = "RAYO_VALLECANO";
    Equipo[Equipo["GETAFE"] = 3] = "GETAFE";
    Equipo[Equipo["LEGANES"] = 4] = "LEGANES";
    Equipo[Equipo["ALCORCON"] = 5] = "ALCORCON";
})(Equipo || (Equipo = {}));
let miEquipo = Equipo.REAL_MADRID;
