import config from '../config/config.js';
import prota from '../prota.js';
import Button from '../components/Button.js';
import Text from '../components/Text.js';

export default class TitleScene extends Phaser.Scene
{
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('logo', 'assets/images/possible_background_1.png');
    this.load.image('button', 'assets/images/test_button.png');
    this.load.image('button_hover', 'assets/images/test_button_hover.png');
    this.load.image('imagen-inicio', 'assets/images/Alb_prota_dcha_1_conbrazo.png');
    this.load.audio('myst', 'assets/musica/myst-on-the-moor.mp3');
  }

  create() {
    // Play button
    this.playButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY - 50,
      image: 'button',
      alt: 'button_hover',
      text: new Text(this, 0, 0, 'Play!', 'button')
    });

    this.playButton.on('pointerdown', (pointer) => this.scene.start('Preloader'));

    // Controls Button
    this.controlsButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY + 35,
      image: 'button',
      alt: 'button_hover',
      text: new Text(this, 0, 0, 'Controls', 'button'),
      target: 'Controls'
    })

    // Options button
    this.optionsButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY + 120,
      image: 'button',
      alt: 'button_hover',
      text: new Text(this, 0, 0, 'Options', 'button'),
      target: 'Options'
    });

    // this.optionsButton.on('pointerdown', (pointer) => this.scene.start('Options'));

    // Credits button
    this.creditsButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY + 205,
      image: 'button',
      alt: 'button_hover',
      text: new Text(this, 0, 0, 'Credits', 'button')
    });

    this.creditsButton.on('pointerdown', (pointer) => this.scene.start('Credits'));

    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('myst', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
};
