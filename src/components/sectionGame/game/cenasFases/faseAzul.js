import Phaser, { Scene } from 'phaser';

class faseAzul extends Scene {
    constructor() {
        super("faseAzul");
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image("fundoAzul", "faseAzul.png");
    }

    create() {
        const largura = this.scale.width;
        const altura = this.scale.height;

        this.add.image(0, 0, "fundoAzul")
            .setOrigin(0, 0)
            .setDisplaySize(largura, altura);

        const larguraBotao = 620;
        const alturaBotao = 80;
        const posX = largura / 2;

        // Subiu o botão mais um pouco
        const posY = altura - 350; 

        const botao = this.add.graphics();
        botao.strokeRect(
            posX - larguraBotao / 2,
            posY - alturaBotao / 2,
            larguraBotao,
            alturaBotao
        );

        const zonaInterativa = this.add.zone(posX, posY, larguraBotao, alturaBotao);
        zonaInterativa.setOrigin(0.5);
        zonaInterativa.setInteractive();

        zonaInterativa.on('pointerdown', () => {
            console.log("Botão clicado!");
            this.scene.start('FasePapel');
        });

        zonaInterativa.on('pointerover', () => this.input.setDefaultCursor('pointer'));
        zonaInterativa.on('pointerout', () => this.input.setDefaultCursor('default'));
    }
}

export default faseAzul;
