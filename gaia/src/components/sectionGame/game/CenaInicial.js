import Phaser, { Scene } from 'phaser';

class CenaInicial extends Scene {
    alturaJogo = 600;
    larguraJogo = 800;

    constructor() {
        super("CenaInicial");
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image("capa", "capa.png");
        this.load.image("botaoJogar", "botaoJogar.png");
        this.load.image("botaoComoJogar", "botaoComoJogar.png");
        this.load.image("iconeReciclagem", "iconeReciclagem.png");
    }

    create() {
        // Fundo
        this.add.image(this.larguraJogo / 2, this.alturaJogo / 2, "capa")
            .setDisplaySize(this.larguraJogo, this.alturaJogo);

        // Ícone no topo
        this.add.image(this.larguraJogo / 2, 200, "iconeReciclagem").setScale(2.5);

        // Escalas dos botões
        const escalaJogar = 2;
        const escalaComo = 1.8; // escala maior para ficar mais visível

        // ================= BOTÃO JOGAR (centralizado) =================
        const imgJogar = this.textures.get("botaoJogar").getSourceImage();
        const larguraJogar = imgJogar.width * escalaJogar;
        const alturaJogar = imgJogar.height * escalaJogar;

        this.botaoJogar = this.add.image(this.larguraJogo / 2, 400, "botaoJogar")
            .setScale(escalaJogar)
            .setInteractive(new Phaser.Geom.Rectangle(0, 0, imgJogar.width, imgJogar.height), Phaser.Geom.Rectangle.Contains);

        this.botaoJogar.input.hitArea.setSize(larguraJogar, alturaJogar);

        this.botaoJogar.on("pointerover", () => this.input.setDefaultCursor("pointer"));
        this.botaoJogar.on("pointerout", () => this.input.setDefaultCursor("default"));
        this.botaoJogar.on("pointerdown", () => this.scene.start("FaseOrganica"));

        // ================= BOTÃO COMO JOGAR (canto superior esquerdo) =================
        const imgComo = this.textures.get("botaoComoJogar").getSourceImage();
        const larguraComo = imgComo.width * escalaComo;
        const alturaComo = imgComo.height * escalaComo;

        // Posiciona no canto superior esquerdo, com margem de 20 pixels de cada lado
        const margem = 20;
        const xComo = margem + larguraComo / 2;
        const yComo = margem + alturaComo / 2;

        this.botaoComoJogar = this.add.image(xComo, yComo, "botaoComoJogar")
            .setScale(escalaComo)
            .setInteractive(new Phaser.Geom.Rectangle(0, 0, imgComo.width, imgComo.height), Phaser.Geom.Rectangle.Contains);

        this.botaoComoJogar.input.hitArea.setSize(larguraComo, alturaComo);

        this.botaoComoJogar.on("pointerover", () => this.input.setDefaultCursor("pointer"));
        this.botaoComoJogar.on("pointerout", () => this.input.setDefaultCursor("default"));
        this.botaoComoJogar.on("pointerdown", () => this.scene.start("ComoJogar"));
    }
}

export default CenaInicial;
