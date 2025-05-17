import { AUTO, Game } from "phaser"
import CenaInicial from "./CenaInicial";
import Fase1 from "./Fase1";
import ComoJogar from "./ComoJogar";
import Fase2 from "./Fase2";
import FaseOrganica from "./Fase1";

const config = {
    type: AUTO,
    width: 800, // Largura da tela do jogo
    height: 600, // Altura da tela do jogo
    physics: {
        default: 'arcade', // Define a física do jogo como arcade
        arcade: {
            gravity: { y: 300 }, // Define a gravidade para puxar objetos para baixo
            debug: true // Habilita a exibição de hitboxes para depuração
        }
    },
    parent: "game",
    scene: [FaseOrganica] 
};

const StartGame = (parent) => {
    return new Game({...config, parent});
}
export default StartGame