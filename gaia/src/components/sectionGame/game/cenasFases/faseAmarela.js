import Phaser, { Scene } from 'phaser';

class faseAmarela extends Scene {
    constructor() {
        super("faseAmarela");
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image("fundoAmarelo", "faseAmarela.png");
    }

    create() {
        const largura = this.scale.width;
        const altura = this.scale.height;

        this.add.image(0, 0, "fundoAmarelo")
            .setOrigin(0, 0)
            .setDisplaySize(largura, altura);

        const larguraBotao = 620;
        const alturaBotao = 80;
        const posX = largura / 2;
        const posY = altura - 100 - 150; // <<< Subindo a zona interativa também

        // Desenhar borda do botão
        const botao = this.add.graphics();
        
        botao.strokeRect(posX - larguraBotao / 2, posY - alturaBotao / 2, larguraBotao, alturaBotao);

        // Zona interativa agora está na mesma altura da borda
        const zonaInterativa = this.add.zone(posX, posY, larguraBotao, alturaBotao);
        zonaInterativa.setOrigin(0.5);
        zonaInterativa.setInteractive();

        zonaInterativa.on('pointerdown', () => {
            console.log("Botão clicado!");
            this.scene.start('FaseMetal');
        });

        zonaInterativa.on('pointerover', () => this.input.setDefaultCursor('pointer'));
        zonaInterativa.on('pointerout', () => this.input.setDefaultCursor('default'));
    }
}

export default faseAmarela;
