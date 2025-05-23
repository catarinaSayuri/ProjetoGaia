import { Scene } from 'phaser';

class ComoJogar extends Scene {

    constructor() {
        super("ComoJogar");
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image("fundoExplicacao", "fundoExplicacao.png");
        this.load.image("botaoVoltar", "botaoVoltar.png");
    }

    create() {
        const largura = this.scale.width;
        const altura = this.scale.height;

        // Centraliza o fundo e escala para cobrir a tela toda
        this.add.image(largura / 2, altura / 2, "fundoExplicacao")
            .setDisplaySize(largura, altura); // Ocupa todo o espaço

        // Posiciona o botão mais à direita e um pouco mais abaixo, com tamanho reduzido
        this.botaoVoltar = this.add.image(largura - 60, 100, "botaoVoltar") // x alterado de -100 para -60
            .setScale(0.2)
            .setInteractive();

        this.botaoVoltar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });

        this.botaoVoltar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoVoltar.on("pointerdown", () => {
            this.scene.start("CenaInicial");
        });
    }
}

export default ComoJogar;
