export default class ControlAction extends Phaser.GameObjects.Container
{
  constructor(scene, x, y, image, config) {
    let sprite = scene.add.sprite(0, 0, image);

    super(scene, x, y, sprite);

    this.setSize(sprite.width, sprite.height);

    scene.anims.create(config);

    sprite.setScale(3);
    sprite.anims.load(config.key);
    sprite.anims.play(config.key);

    scene.add.existing(this);
  }
}
