import Phaser from 'phaser';

export default class Fase1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Fase1' });
        this.tipoCorreto = ['banana', 'maca']; // Lixo orgânico permitido
        this.pontuacao = 0;
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('fundo', 'fundo.png');
        this.load.image('lixeira', 'lixeira_organico.png');
        this.load.image('banana', 'banana.png');
        this.load.image('maca', 'maca.png');
        this.load.image('plastico', 'plastico.png');
    }

    create() {
        this.add.image(400, 300, 'fundo').setScale(1.1);

        this.teclado = this.input.keyboard.createCursorKeys();

        this.lixeira = this.physics.add.sprite(400, 550, 'lixeira').setImmovable(true).setScale(0.6);
        this.lixeira.setCollideWorldBounds(true);

        this.lixos = this.physics.add.group();
        this.placar = this.add.text(30, 30, 'Pontos: 0', { fontSize: '32px', fill: '#FFF' });

        this.tempoLixo = this.time.addEvent({
            delay: 1200,
            loop: true,
            callback: () => {
                const tipos = ['banana', 'maca', 'plastico'];
                const tipo = Phaser.Math.RND.pick(tipos);
                const lixo = this.lixos.create(Phaser.Math.Between(50, 750), 0, tipo);
                lixo.setData('tipo', tipo);
                lixo.setVelocityY(150);
                lixo.setScale(0.5);
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
        }

        this.placar.setText('Pontos: ' + this.pontuacao);

        if (this.pontuacao >= 5) {
            this.add.text(250, 280, 'Você Venceu!', { fontSize: '48px', fill: '#0F0' });
            this.scene.pause();
        } else if (this.pontuacao <= -5) {
            this.add.text(250, 280, 'Você Perdeu!', { fontSize: '48px', fill: '#F00' });
            this.scene.pause();
        }
    }
}
