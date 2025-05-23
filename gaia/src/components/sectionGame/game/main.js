import { AUTO, Game, Scale } from "phaser";
import CenaInicial from "./CenaInicial";
import ComoJogar from "./ComoJogar";
import FaseOrganica from "./FaseOrganica";
import FasePlastico from "./FasePlastico";
import FaseMetal from "./FaseMetal";
import FaseVidro from "./FaseVidro";
import FasePapel from "./FasePapel";
import faseAmarela from "./cenasFases/faseAmarela";
import faseAzul from "./cenasFases/faseAzul";
import faseMarrom from "./cenasFases/faseMarrom";
import faseVerde from "./cenasFases/faseVerde";
import faseVermelha from "./cenasFases/faseVermelha";

const config = {
    type: AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Scale.FIT, // Permite adaptar ao tamanho da tela
        autoCenter: Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    parent: "game",
    scene: [
        CenaInicial,
        FaseOrganica,
        faseVermelha,
        faseVerde,
        faseMarrom,
        faseAzul,
        faseAmarela,
        ComoJogar,
        FasePapel,
        FasePlastico,
        FaseMetal,
        FaseVidro
    ]
};

const StartGame = (parent) => {
    return new Game({ ...config, parent });
};

export default StartGame;
