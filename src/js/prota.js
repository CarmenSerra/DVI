import Star from './star.js'


export default class Player extends Phaser.GameObjects.Sprite
{
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -400;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();

    /*
    player = this.physics.add.sprite(200, window.innerHeight - 150, 'meatboy');
    player.setBounce(0.15);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);

      //-----------DERECHA--------
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('meatboy', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    //----------IZQUIERDA--------
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('meatboy', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    this.physics.add.collider(player, platforms);
    */
  }

  point() {
    this.score++;
    this.updateScore();
  }

  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }

  preUpdate() {
    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
  }
}
