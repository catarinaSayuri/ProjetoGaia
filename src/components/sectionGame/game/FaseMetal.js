import Phaser from 'phaser';

export default class FaseMetal extends Phaser.Scene {
    constructor() {
        super({ key: 'FaseMetal' });
        this.tipoCorreto = ['lataMetal', 'lataMetalPequena'];
        this.pontuacao = 0;
        this.vidaAtual = 3;
    }

    preload() {
        this.load.setPath("assetsGame");
        this.load.image('fundo', 'fundo.png');
        this.load.image('lixeiraAmarela', 'lixeiraAmarela.png');
        this.load.image('lataMetal', 'lataMetal.png');
        this.load.image('lataMetalPequena', 'lataMetalPequena.png');
        this.load.image('plastico', 'plastico.png');
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

        this.lixeiraAmarela = this.physics.add.sprite(400, 550, 'lixeiraAmarela')
            .setImmovable(true)
            .setScale(1.4);
        this.lixeiraAmarela.setCollideWorldBounds(true);

        this.lixos = this.physics.add.group();
        this.placar = this.add.text(30, 30, 'Pontos: 0', { fontSize: '32px', fill: '#FFF' });

        this.imagemVidas = this.add.image(60, 80, 'vidas3').setScale(2).setOrigin(0.5);

        this.tempoLixo = this.time.addEvent({
            delay: 800,
            loop: true,
            callback: () => {
                const tipos = ['lataMetal', 'lataMetalPequena', 'plastico', 'jornal'];
                const tipo = Phaser.Math.RND.pick(tipos);
                const lixo = this.lixos.create(Phaser.Math.Between(50, 750), 0, tipo);
                lixo.setData('tipo', tipo);
                lixo.setVelocityY(250);
                lixo.setScale(1.4);
            }
        });

        this.physics.add.overlap(this.lixeiraAmarela, this.lixos, this.coletarLixo, null, this);
    }

    update() {
        if (this.teclado.left.isDown) {
            this.lixeiraAmarela.setVelocityX(-200);
        } else if (this.teclado.right.isDown) {
            this.lixeiraAmarela.setVelocityX(200);
        } else {
            this.lixeiraAmarela.setVelocityX(0);
        }
    }

    coletarLixo(lixeiraAmarela, lixo) {
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

        this.placar.setText('Pontos: ' + this.pontuacao);

        if (this.pontuacao >= 5) {
            this.add.text(250, 280, 'Você Venceu!', { fontSize: '48px', fill: '#0F0' });
            this.time.delayedCall(2000, () => {
                this.scene.start('faseVerde');
            });
        } else if (this.vidaAtual <= 0) {
            this.add.text(250, 280, 'Você Perdeu!', { fontSize: '48px', fill: '#F00' });
            this.time.delayedCall(2000, () => {
                this.scene.start('CenaInicial');
            });
        }
    }
}
