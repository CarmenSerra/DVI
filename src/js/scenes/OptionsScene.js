import Button from '../components/Button.js';

export default class OptionsScene extends Phaser.Scene
{
  constructor() {
    super('Options');
  }

  preload() {
  }

  create() {
    this.model = this.sys.game.globals.model;

    // Options Title
    this.text = this.add.text(this.cameras.main.centerX, 100, 'Options', {
      fontFamily: 'TooMuchInk',
      fontSize: 60,
      fill: '#fff'
    });

    this.text.setOrigin(0.5, 0.5);

    // Music Button
    this.musicButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY - 100,
      image: 'button',
      alt: 'button_hover',
      text: 'Music: ' + this.musicState()
    });

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    // Sound Button
    this.soundButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
      image: 'button',
      alt: 'button_hover',
      text: 'Sound: ' + this.soundState()
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
      text: 'Go Back',
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
