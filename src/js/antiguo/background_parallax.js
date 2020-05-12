export default class Base extends Phaser.GameObjects.Sprite
{
  constructor(scene, platform, x, y, baseGroup) {
    super(scene, x, y, 'base');
    this.scene.add.existing(this);

    this.scene.physics.add.existing(this, true);
    baseGroup.add(this);
    this.y -= this.height / 2 + platform.height / 2;
  }


  create() {
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
  }

  //PUEDE QUE EL SPAWN SEA EN EL GAME.JS NUEVO
  spawn() {
    this.scene.add.existing(new Star(this.scene, this, this.x, this.y));
  }

  preUpdate() {
    this.war1_sky.tilePositionX += 5;
    this.war1_sun.tilePositionX += 5
    this.war1_ruins.tilePositionX += 5;
    this.war1_house3.tilePositionX += 5;
    this.war1_house2.tilePositionX += 5;
    this.war1_house1.tilePositionX += 5;
    this.war1_fence.tilePositionX += 5;
    this.war1_road.tilePositionX += 5;

    /*PROBANDO BACKGROUNDS*/
    /*this.background_1_obj.tilePosition.x -=0.05;
    this.columns_and_floor_obj.tilePosition.x -=0.3;
    this.train_obj.tilePosition.x-=0.75;*/

    this.war1_sky.tilePositionX = this.myCam.scrollX * .2;
    this.war1_sun.tilePositionX = this.myCam.scrollX * .2;
    this.war1_ruins.tilePositionX = this.myCam.scrollX * .3;
    this.war1_house3.tilePositionX = this.myCam.scrollX * .3;
    this.war1_house2.tilePositionX = this.myCam.scrollX * .4;
    this.war1_house1.tilePositionX = this.myCam.scrollX * .5;
    this.war1_fence.tilePositionX = this.myCam.scrollX * .8;
    this.war1_road.tilePositionX = this.myCam.scrollX;
  }
}