export default class EnemigoRunner extends Phaser.GameObjects.Sprite
{
  constructor(scene, x, y) {
    super(scene, x, y, 'enemigorunner');
  }

  create() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setVelocityX(70); //Tiene que ir mas rapido que el resto
  }

  anims_enemigorunner() {
    //Corre
    this.scene.anims.create({
      key: 'enmigorrunner_corriendo',
      frames: this.scene.anims.generateFrameNames('enemigorunner', {
        // prefix:?
        // sufix: ?
        start: 100,
        end: 108,
        zeroPad: 2
      }),
      frameRate: 4,
      repeat:-1,
    });

    //Herido de cualquier manera
    this.scene.anims.create({
      key: 'enmigorrunner_herido',
      frames: this.scene.anims.generateFrameNames('enemigorunner', {
        // prefix: ??
        // sufix: ??
        start: 100,
        end: 108,
        zeroPad: 2
      }),
      frameRate: 4,
      repeat:-1,
    });
  }

  update() {
    this.body.setSize(0,65);
    // Collider ??
    this.play('enmigorrunner_corriendo', true);
  }
}
