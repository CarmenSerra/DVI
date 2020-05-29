import Button from '../components/Button.js';
import Text from '../components/Text.js';
import ControlAction from '../components/ControlAction.js';

export default class ControlsScene extends Phaser.Scene
{
  constructor() {
    super('Controls');
  }

  init(data) {
    this.previousScene = data.previousScene;
  }

  preload() {
    this.load.spritesheet('keyboard', 'assets/controls/keyboard_black_corn.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    let attack = {
      key: 'attack',
      frames: this.anims.generateFrameNumbers('keyboard', { frames: [51, 147] }),
      frameRate: 4,
      yoyo: true,
      repeat: -1
    };

    let pause = {
      key: 'pause',
      frames: this.anims.generateFrameNumbers('keyboard', { frames: [44, 140] }),
      frameRate: 3,
      yoyo: true,
      repeat: -1
    };

    let left = {
      key: 'left',
      frames: this.anims.generateFrameNumbers('keyboard', { frames: [91, 187] }),
      frameRate: 3,
      yoyo: true,
      repeat: -1
    };

    let right = {
      key: 'right',
      frames: this.anims.generateFrameNumbers('keyboard', { frames: [189, 93] }),
      frameRate: 3,
      yoyo: true,
      repeat: -1
    };

    let up = {
      key: 'up',
      frames: this.anims.generateFrameNumbers('keyboard', { frames: [76, 172] }),
      frameRate: 2,
      yoyo: true,
      repeat: -1
    };

    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    // Atacar
    this.attackAction = new ControlAction(this, centerX - 500, centerY - 50, 'keyboard', attack);
    this.attackText = new Text(this, 0, 45, 'Attack', 'controls');
    this.attackAction.add(this.attackText);

    // Pausa
    this.pauseAction = new ControlAction(this, centerX - 250, centerY - 50, 'keyboard', pause);
    this.pauseText = new Text(this, 0, 45, 'Pause', 'controls');
    this.pauseAction.add(this.pauseText);

    // Izquierda
    this.leftAction = new ControlAction(this, centerX + 100, centerY - 50, 'keyboard', left);
    this.leftText = new Text(this, 0, 45, 'Move Left', 'controls');
    this.leftAction.add(this.leftText);

    // Derecha
    this.rightAction = new ControlAction(this, centerX + 500, centerY - 50, 'keyboard', right);
    this.rightText = new Text(this, 0, 45, 'Move Right', 'controls');
    this.rightAction.add(this.rightText);

    // Arriba
    this.upAction = new ControlAction(this, centerX + 300, centerY - 50, 'keyboard', up);
    this.upText = new Text(this, 0, 45, 'Jump', 'controls');
    this.upAction.add(this.upText);

    // Return to menu
    this.menuText = new Text(this, 0, 0, 'Go Back', 'button');
    this.menuButton = new Button(this, centerX, centerY + 200, 'button', 'button_hover', 'Title');
    this.menuButton.add(this.menuText);
    this.menuButton.on('pointerdown', () => {
      this.scene.start(this.previousScene);
    });
  }
}
