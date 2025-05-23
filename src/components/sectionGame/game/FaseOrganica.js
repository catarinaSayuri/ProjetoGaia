import Phaser from 'phaser';

export default class FaseOrganica extends Phaser.Scene {
    constructor() {
        super({ key: 'FaseOrganica' });
        this.tipoCorreto = ['banana', 'maca'];
        this.pontuacao = 0;
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image('fundo', 'fundo.png');
        this.load.image('lixeira', 'lixeiraMarrom.png');
        this.load.image('banana', 'banana.png');
        this.load.image('maca', 'maca.png');
        this.load.image('plastico', 'garrafaPlastico.png');
        this.load.image('vidas1', 'vidas1.png');
        this.load.image('vidas2', 'vidas2.png');
        this.load.image('vidas3', 'vidas3.png');
    }

    create() {
        const largura = this.scale.width;
        const altura = this.scale.height;

        this.add.image(0, 0, 'fundo').setOrigin(0, 0).setDisplaySize(largura, altura);

        this.teclado = this.input.keyboard.createCursorKeys();

        this.lixeira = this.physics.add.sprite(largura / 2, altura - 80, 'lixeira')
            .setImmovable(true)
            .setScale(1.4);
        this.lixeira.setCollideWorldBounds(true);

        this.lixos = this.physics.add.group();

        // Substitui o texto por imagem de vidas
        this.vidaAtual = 3;
        this.imagemVidas = this.add.image(60, 50, 'vidas3').setScale(2).setOrigin(0.5);

        this.tempoLixo = this.time.addEvent({
            delay: 1200,
            loop: true,
            callback: () => {
                const tipos = ['banana', 'maca', 'plastico'];
                const tipo = Phaser.Math.RND.pick(tipos);
                const lixo = this.lixos.create(Phaser.Math.Between(50, largura - 50), 0, tipo);
                lixo.setData('tipo', tipo);
                lixo.setVelocityY(150);
                lixo.setScale(1.4);
            }
        });

        this.physics.add.overlap(this.lixeira, this.lixos, this.coletarLixo, null, this);
    }

    update() {
        if (this.teclado.left.isDown) {
            this.lixeira.setVelocityX(-200);
        } else if (this.teclado.right.isDown) {
            this.lixeira.setVelocityX(200);
        } else {
            this.lixeira.setVelocityX(0);
        }
    }

    coletarLixo(lixeira, lixo) {
        const tipo = lixo.getData('tipo');
        lixo.destroy();

        if (this.tipoCorreto.includes(tipo)) {
            this.pontuacao++;
        } else {
            this.pontuacao--;
            this.vidaAtual--;

            if (this.vidaAtual === 2) {
                this.imagemVidas.setTexture('vidas2');
            } else if (this.vidaAtual === 1) {
                this.imagemVidas.setTexture('vidas1');
            }
        }

        // Verifica vitória
        if (this.pontuacao >= 3) {
            this.add.text(this.scale.width / 2, this.scale.height / 2, 'Você Venceu!', { fontSize: '48px', fill: '#0F0' }).setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.scene.start('faseAzul');
            });
        }

        // Verifica derrota
        if (this.vidaAtual <= 0) {
            this.add.text(this.scale.width / 2, this.scale.height / 2, 'Você Perdeu!', { fontSize: '48px', fill: '#F00' }).setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.scene.start('CenaInicial');
            });
        }
    }
}
