import config from '../config/config.js';

export default class CreditsScene extends Phaser.Scene
{
  constructor() {
    super('Credits');
  }

  create() {
    let authors = [
      {
        name: 'Carmen Serrano Avilés',
        position: -350,
        duration: 8000,
        delay: 2000,
        offset: 1500
      },
      {
        name: 'Héctor Hugo Coronado Huamán',
        position: -400,
        duration: 8500,
        delay: 2000,
        offset: 1600
      }
    ];

    let textSize = '32px';
    let colorText = '#fff';

    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '60px',
      fill: colorText
    });

    this.madeByText = this.add.text(0, 0, 'Created By', {
      fontSize: '44px',
      fill: colorText
    });

    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);

    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    this.madeByText.setY(1000);

    this.creditsTweens = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: () => {
        this.destroy
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: () => {
        this.madeByTween.destroy;
        this.scene.start('Title');
      }
    });

    let authorsText = authors.map((author) => {
      let authorText = this.add.text(0, 0, author.name, {
        fontSize: textSize,
        fill: colorText
      });

      Phaser.Display.Align.In.Center(authorText, this.zone);

      authorText.setY(author.offset);

      this.tweens.add({
        targets: authorText,
        y: author.position,
        ease: 'Power1',
        duration: author.duration,
        delay: author.delay,
        onComplete: () => {
          authorText.destroy;
        }
      });

      return authorText;
    });
  }
};
