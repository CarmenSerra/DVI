import Button from '../components/Button.js';
import Text from '../components/Text.js';

export default class OptionsScene extends Phaser.Scene
{
  constructor() {
    super('Options');
  }

  preload() {
  }

  create() {
    this.model = this.sys.game.globals.model;

    // Options title
    this.text = new Text(this, 0, 0, 'Options', 'title');

    this.text.setPosition(this.cameras.main.centerX - this.text.width / 2, 100);

    // Music
    this.musicText = new Text(this, 0, 0, 'Music: ' + this.musicState(), 'button');

    this.musicButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY - 100,
      image: 'button',
      alt: 'button_hover',
      text: this.musicText
    });

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    // Sound
    this.soundText = new Text(this, 0, 0, 'Sound: ' + this.soundState(), 'button');

    this.soundButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
      image: 'button',
      alt: 'button_hover',
      text: this.soundText
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    // Return to menu button
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

  updateAudio() {
    if (this.model.musicOn === false) {
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    this.musicText.setText('Music: ' + this.musicState());

    this.soundText.setText('Sound: ' + this.soundState());

    /*if (this.model.soundOn === false) {
      // Set button text off
    } else {
      // Set button text on
    }*/
  }

  musicState() {
    return this.model.musicOn ? 'On' : 'Off';
  }

  soundState() {
    return this.model.soundOn ? 'On' : 'Off';
  }
};
