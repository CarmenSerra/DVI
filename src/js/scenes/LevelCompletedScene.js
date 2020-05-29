import Button from '../components/Button.js';
import Text from '../components/Text.js'

export default class LevelCompletedScene extends Phaser.Scene
{
  constructor() {
    super('LevelCompleted');
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.level = new Text(this, centerX, centerY - 250, 'Level', 'victory');
    this.completed = new Text(this, centerX, centerY - 125, 'Completed!', 'victory2');

    this.levelTween = this.tweens.add({
      targets: this.level,
      duration: 1500,
      ease: 'Quint.EaseIn',
      delay: 500,
      alpha: { start:0, from: 0, to: 1 }
    });

    this.completedTween = this.tweens.add({
      targets: this.completed,
      duration: 3500,
      ease: 'Quint.EaseIn',
      delay: 2500,
      alpha: { start:0, from: 0, to: 1 }
    });

    this.time.delayedCall(7000, this.nextScene, [], this);
  }

  nextScene() {
    this.cameras.main.fadeOut(3000, 0, 0, 0);
    this.levelTween.destroy;
    this.completedTween.destroy;
    // Pasar a siguiente nivel
  }
}
