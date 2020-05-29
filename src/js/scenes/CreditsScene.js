import Text from '../components/Text.js';

export default class CreditsScene extends Phaser.Scene
{
  constructor() {
    super('Credits');
  }

  init(data) {
    this.previousScene = data.previousScene;
  }

  create() {
    const authors = [
      'Carmen Serrano Avilés',
      'Héctor Hugo Coronado Huamán',
    ];

    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    // Credits title
    this.creditsTitle = new Text(this, centerX, centerY, 'Credits', 'title');

    this.creditsTweens = this.tweens.add({
      targets: this.creditsTitle,
      y: -200,
      ease: 'Power2',
      duration: 3000,
      delay: 1000,
      onComplete: () => {
        this.creditsTitle.destroy
      }
    });

    // Made by text
    this.madeByText = new Text(this, centerX, 1000, 'Created By', 'subtitle');

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power0',
      duration: 4000,
      delay: 1100,
      onComplete: () => {
        this.madeByTween.destroy;
      }
    });

    // Authors
    this.authorsText = new Text(this, centerX, 1010, authors.join('\n'), 'credits');

    this.authorsTween = this.tweens.add({
      targets: this.authorsText,
      y: -320,
      ease: 'Power0',
      duration: 4500,
      delay: 1200,
      onComplete: () => {
        this.authorsText.destroy;
        this.scene.start(this.previousScene);
      }
    });
  }
};
