//import 'phaser';

export default class BootScene extends Phaser.Scene
{
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('icon', 'assets/images/prototipo_icon.png');

    this.load.spritesheet('protagonista_andando', 'assets/images/PNG_Individual_Prota_Andando_2.png', { frameWidth: 89, frameHeight: 89});
    this.load.spritesheet('protagonista_saltando', 'assets/images/PNG_Individual_Prota_Saltando.png', { frameWidth: 89, frameHeight: 96});

  }

  create() {
    this.scene.start('Preloader');
  }
};
