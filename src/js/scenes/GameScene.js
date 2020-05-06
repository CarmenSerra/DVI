//import 'phaser';
import Protagonist from '../components/Protagonist.js';

export default class GameScene extends Phaser.Scene
{
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    //this.background  = this.add.image(750,250,'bg');

    this.war1_sky = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_sky');
    this.war1_sky.setOrigin(0, 0);
    this.war1_sky.setScrollFactor(0);

    this.war1_sun = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_sun');
    this.war1_sun.setOrigin(0, 0);
    this.war1_sun.setScrollFactor(0);

    this.war1_ruins = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_ruins');
    this.war1_ruins.setOrigin(0, 0);
    this.war1_ruins.setScrollFactor(0);

    this.war1_house3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_house3');
    this.war1_house3.setOrigin(0, 0);
    this.war1_house3.setScrollFactor(.4);

    this.war1_house2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_house2');
    this.war1_house2.setOrigin(0, 0);
    this.war1_house2.setScrollFactor(.5);

    this.war1_house1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_house1');
    this.war1_house1.setOrigin(0, 0);
    this.war1_house1.setScrollFactor(.6);

    this.war1_fence = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_fence');
    this.war1_fence.setOrigin(0, 0);
    this.war1_fence.setScrollFactor(.7);

    this.war1_road = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_road');
    this.war1_road.setOrigin(0, 0);
    this.war1_road.setScrollFactor(0);

    var sprite = this.add.sprite(450, 200, 'protagonista2');

    this.anims.create({ // Carlos
      key: 'standing_sprite',
      frames: this.anims.generateFrameNumbers('protagonista2', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });

    sprite.play('standing_sprite');
  }

  update(time, delta) {

  }
};
