import Text from '../components/Text.js';

export default class CreditsScene extends Phaser.Scene
{
  constructor() {
    super('Credits');
  }

  create() {
    const authors = [
      'Carmen Serrano Avilés',
      'Héctor Hugo Coronado Huamán',
    ];

    // Credits title
    this.creditsTitle = new Text(this, 0, 0, 'Credits', 'title');

    this.creditsTitle.setPosition(this.cameras.main.centerX - this.creditsTitle.width / 2, this.cameras.main.centerY);

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
    this.madeByText = new Text(this, 0, 0, 'Created By', 'subtitle');

    this.madeByText.setPosition(this.cameras.main.centerX - this.madeByText.width / 2, 1000);

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
    this.authorsText = new Text(this, 0, 0, authors.join('\n'), 'credits');

    this.authorsText.setPosition(this.cameras.main.centerX - this.authorsText.width / 2, 1010);

    this.authorsTween = this.tweens.add({
      targets: this.authorsText,
      y: -320,
      ease: 'Power0',
      duration: 4500,
      delay: 1200,
      onComplete: () => {
        this.authorsText.destroy;
        this.scene.start('Title');
      }
    });
  }
};
