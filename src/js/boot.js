export default class Boot extends Phaser.Scene
{
  constructor() {
    super({ key: 'boot' });
  }

  preload() {
    /*BACKGROUND*/
    this.load.image('war1_sky', 'assets/images/backgrounds/War1/Bright/sky.png');
    this.load.image('war1_sun', 'assets/images/backgrounds/War1/Bright/sun.png');
    this.load.image('war1_ruins', 'assets/images/backgrounds/War1/Bright/ruins.png');
    this.load.image('war1_house3', 'assets/images/backgrounds/War1/Bright/house3.png');
    this.load.image('war1_house2', 'assets/images/backgrounds/War1/Bright/houses2.png');
    this.load.image('war1_house1', 'assets/images/backgrounds/War1/Bright/houses1.png');
    this.load.image('war1_fence', 'assets/images/backgrounds/War1/Bright/fence.png');
    this.load.image('war1_road', 'assets/images/backgrounds/War1/Bright/road.png');

    /*PROTAGONISTA*/
    this.load.spritesheet('meatboy', 'assets/PNG_Final_Todos_Los_Sprites_2.png',108,100);

    /*ENEMIGOS*/
  }

  create() {
    this.scene.start('scene');
  }
}
