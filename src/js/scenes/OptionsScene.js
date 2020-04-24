import config from '../config/config.js';
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

    this.text = this.add.text(300, 100, 'Options', {
      fontFamily: 'TooMuchInk',
      fontSize: 60,
      fill: '#fff'
    });

    this.text.setOrigin(0.1, 0.5);

    // this.centerButton(this.text, 2);

    // this.musicButton = this.add.sprite(250, 125, 'button').setInteractive();
    this.musicButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: 125,
      image: 'button',
      alt: 'button_hover',
    });

    this.musicText = this.add.text(0, 0, 'Music: ' + this.musicState(), {
      fontFamily: 'TooMuchInk',
      fontSize: 24,
      fill: '#fff'
    });
    // this.centerButton(this.musicButton, 1);

    Phaser.Display.Align.In.Center(this.musicText, this.musicButton);

    // this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundButton = this.add.sprite(250, 125, 'button').setInteractive();
    this.soundText = this.add.text(0, 0, 'Sound: ' + this.soundState(), {
      fontFamily: 'TooMuchInk',
      fontSize: 24,
      fill: '#fff'
    });
    // this.centerButton(this.soundButton);

    Phaser.Display.Align.In.Center(this.soundText, this.soundButton);

    //this.musicButton.setInteractive();
    //this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    //this.updateAudio();

    /*this.menuButton = this.add.sprite(250, 125, 'button').setInteractive();
    this.menuText = this.add.text(0, 0, 'Go Back', {
      fontFamily: 'TooMuchInk',
      fontSize: 24,
      fill: '#fff'
    });
    this.centerButton(this.menuButton, -2);

    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);

    this.menuButton.on('pointerdown', (pointer) => this.scene.start('Title'));*/

    this.menuButton = new Button({
      current: this,
      x: config.width / 2,
      y: config.height / 2 + 200,
      image: 'button',
      alt: 'button_hover',
      text: 'Go Back',
      target: 'Title'
    });

    //this.centerButton(this.menuButton, -2);
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
