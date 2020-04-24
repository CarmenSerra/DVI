//import 'phaser';

export default class GameScene extends Phaser.Scene
{
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo2', 'assets/images/phaser_logo.png');
  }

  create() {
    //prota = new Prota();
    this.add.image(400, 300, 'logo2');
  }

  update(time, delta) {

  }
};
