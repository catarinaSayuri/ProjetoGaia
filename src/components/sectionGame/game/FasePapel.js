import Phaser from 'phaser';

export default class FasePapel extends Phaser.Scene {
    constructor() {
        super({ key: 'FasePapel' });
        this.tipoCorreto = ['jornal', 'caixaPapelao'];
        this.pontuacao = 0;
        this.vidaAtual = 3;
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image('fundo', 'fundo.png');
        this.load.image('lixeiraAzul', 'lixeiraAzul.png');
        this.load.image('jornal', 'jornal.png');
        this.load.image('caixaPapelao', 'caixaPapelao.png');
        this.load.image('lataMetal', 'lataMetal.png');
        this.load.image('banana', 'banana.png');
        this.load.image('vidas1', 'vidas1.png');
        this.load.image('vidas2', 'vidas2.png');
        this.load.image('vidas3', 'vidas3.png');
    }

    create() {
        const largura = this.scale.width;
        const altura = this.scale.height;

        this.add.image(0, 0, 'fundo').setOrigin(0, 0).setDisplaySize(largura, altura);

        this.teclado = this.input.keyboard.createCursorKeys();

        this.lixeiraAzul = this.physics.add.sprite(largura / 2, altura - 80, 'lixeiraAzul')
            .setImmovable(true)
            .setScale(1.4);
        this.lixeiraAzul.setCollideWorldBounds(true);

        this.lixos = this.physics.add.group();

        this.imagemVidas = this.add.image(60, 50, 'vidas3').setScale(2).setOrigin(0.5);

        this.tempoLixo = this.time.addEvent({
            delay: 600,
            loop: true,
            callback: () => {
                const tipos = ['jornal', 'caixaPapelao', 'lataMetal', 'banana'];
                const tipo = Phaser.Math.RND.pick(tipos);
                const lixo = this.lixos.create(Phaser.Math.Between(50, largura - 50), 0, tipo);
                lixo.setData('tipo', tipo);
                lixo.setVelocityY(300);
                lixo.setScale(1.4);
            }
        });

        this.physics.add.overlap(this.lixeiraAzul, this.lixos, this.coletarLixo, null, this);
    }

    update() {
        if (this.teclado.left.isDown) {
            this.lixeiraAzul.setVelocityX(-200);
        } else if (this.teclado.right.isDown) {
            this.lixeiraAzul.setVelocityX(200);
        } else {
            this.lixeiraAzul.setVelocityX(0);
        }
    }

    coletarLixo(lixeiraAzul, lixo) {
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

        // Vitória
        if (this.pontuacao >= 5) {
            this.add.text(this.scale.width / 2, this.scale.height / 2, 'Você Venceu!', { fontSize: '48px', fill: '#0F0' }).setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.scene.start('faseAmarela');
            });
        }

        // Derrota
        if (this.vidaAtual <= 0) {
            this.add.text(this.scale.width / 2, this.scale.height / 2, 'Você Perdeu!', { fontSize: '48px', fill: '#F00' }).setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.scene.start('CenaInicial');
            });
        }
    }
}
