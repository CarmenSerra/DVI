//import 'phaser';

export default class BootScene extends Phaser.Scene
{
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('icon', 'assets/images/prototipo_icon.png');
  }

  create() {
    this.scene.start('Preloader');
  }
};
