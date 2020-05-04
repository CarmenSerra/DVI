//import 'phaser';

export default class BootScene extends Phaser.Scene
{
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('icon', 'assets/images/prototipo_icon.png');
    this.load.image('imagen-inicio', 'assets/images/Alb_prota_dcha_1_conbrazo.png');

  }

  create() {
    this.scene.start('Preloader');
  }
};
