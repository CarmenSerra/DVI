import Text from '../components/Text.js';
import Button from '../components/Button.js';

export default class GameOverScene extends Phaser.Scene
{
  constructor() {
    super('GameOver');
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    // Parar música
    // Añadir música de game over

    // Game Over
    this.text = new Text(this, centerX, centerY - 100, 'Game Over', 'gameover');
    this.gameover = this.tweens.add({
      targets: this.text,
      duration: 3000,
      ease: 'Quint.EaseIn',
      delay: 500,
      alpha: { start:0, from: 0, to: 1 }
    });

    // Try again?
    this.retryText = new Text(this, 0, 0, 'Retry', 'button');
    this.retryButton = new Button(this, centerX - 150, centerY + 100, 'button', 'button_hover');
    this.retryButton.add(this.retryText);

    // Go title
    this.titleText = new Text(this, 0, 0, 'Menu', 'button');
    this.titleButton = new Button(this, centerX + 150, centerY + 100, 'button', 'button_hover');
    this.titleButton.add(this.titleText);

    this.titleButton.on('pointerdown', () => {
      this.text.destroy;
      this.gameover.destroy;
      this.retryButton.destroy;
      this.titleButton.destroy;
      this.buttons.destroy;
      this.scene.start('Title');
    });

    this.buttons = this.tweens.add({
      targets: [this.retryButton, this.titleButton],
      duration: 500,
      ease: 'Linear',
      delay: 4000,
      alpha: { start:0, from: 0, to: 1 }
    });
  }
}
