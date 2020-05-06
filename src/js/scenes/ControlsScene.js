import Button from '../components/Button.js';
import Text from '../components/Text.js';

export default class ControlsScene extends Phaser.Scene
{
  constructor() {
    super('Controls');
  }

  preload() {
    this.load.spritesheet('keyboard', 'assets/controls/keyboard_black_corn.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    let example = this.add.image(16, 16, 'keyboard', [20, 21]);

    example.setPosition(this.cameras.main.centerX, this.cameras.main.centerY - 150).setScale(2);

    /*let config = {
      key: 'show',
      frames: this.anims.generateFrameNumbers('keyboard'),
      frameRate: 6,
      yoyo: true,
      repeat: -1
    };

    let anim = this.anims.create(config);

    example.anims.load('show');

    example.anims.play('show');*/

    // Return to menu
    this.menuButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY + 150,
      image: 'button',
      alt: 'button_hover',
      text: new Text(this, 0, 0, 'Go Back', 'button'),
      target: 'Title'
    });
  }
}
