import Phaser from 'phaser';

export default class FaseVidro extends Phaser.Scene {
    constructor() {
        super({ key: 'FaseVidro' });
        this.tipoCorreto = ['garrafaVidro', 'garrafaVidroPequena'];
        this.vidaAtual = 3;
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image('fundo', 'fundo.png');
        this.load.image('lixeiraVerde', 'lixeiraVerde.png');
        this.load.image('garrafaVidro', 'garrafaVidro.png');
        this.load.image('garrafaVidroPequena', 'garrafaVidroPequena.png');
        this.load.image('plastico', 'plastico.png');
        this.load.image('lataMetal', 'lataMetal.png');
        this.load.image('jornal', 'jornal.png');
        this.load.image('vidas1', 'vidas1.png');
        this.load.image('vidas2', 'vidas2.png');
        this.load.image('vidas3', 'vidas3.png');
    }

    create() {
        const largura = this.scale.width;
        const altura = this.scale.height;

        this.fundo = this.add.image(0, 0, 'fundo')
            .setOrigin(0, 0)
            .setDisplaySize(largura, altura);

        this.teclado = this.input.keyboard.createCursorKeys();

        this.lixeiraVerde = this.physics.add.sprite(400, 550, 'lixeiraVerde')
            .setImmovable(true)
            .setScale(1.4);
        this.lixeiraVerde.setCollideWorldBounds(true);

        this.lixos = this.physics.add.group();

        this.imagemVidas = this.add.image(60, 80, 'vidas3').setScale(2).setOrigin(0.5);

        this.tempoLixo = this.time.addEvent({
            delay: 400,
            loop: true,
            callback: () => {
                const tipos = ['garrafaVidro', 'garrafaVidroPequena', 'plastico', 'lataMetal', 'jornal'];
                const tipo = Phaser.Math.RND.pick(tipos);
                const lixo = this.lixos.create(Phaser.Math.Between(50, 750), 0, tipo);
                lixo.setData('tipo', tipo);
                lixo.setVelocityY(350);
                lixo.setScale(1.4);
            }
        });

        this.physics.add.overlap(this.lixeiraVerde, this.lixos, this.coletarLixo, null, this);
    }

    update() {
        if (this.teclado.left.isDown) {
            this.lixeiraVerde.setVelocityX(-200);
        } else if (this.teclado.right.isDown) {
            this.lixeiraVerde.setVelocityX(200);
        } else {
            this.lixeiraVerde.setVelocityX(0);
        }
    }

    coletarLixo(lixeiraVerde, lixo) {
        const tipo = lixo.getData('tipo');
        lixo.destroy();

        if (!this.tipoCorreto.includes(tipo)) {
            this.vidaAtual--;

            if (this.vidaAtual === 2) {
                this.imagemVidas.setTexture('vidas2');
            } else if (this.vidaAtual === 1) {
                this.imagemVidas.setTexture('vidas1');
            }
        }

        if (this.vidaAtual <= 0) {
            this.add.text(250, 280, 'Você Perdeu!', { fontSize: '48px', fill: '#F00' });
            this.time.delayedCall(2000, () => {
                this.scene.start('CenaInicial');
            });
        }
    }
}
