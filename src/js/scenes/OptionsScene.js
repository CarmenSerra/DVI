import Button from '../components/Button.js';
import Text from '../components/Text.js';

export default class OptionsScene extends Phaser.Scene
{
  constructor() {
    super('Options');
  }

  init(data) {
    this.previousScene = data.previousScene;
  }

  preload() {
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.model = this.sys.game.globals.model;

    // Options title
    this.text = new Text(this, this.cameras.main.centerX, 100, 'Options', 'title');

    // Music
    this.musicText = new Text(this, 0, 0, 'Music: ' + this.musicState(), 'button');
    this.musicButton = new Button(this, centerX, centerY - 100, 'button', 'button_hover');
    this.musicButton.add(this.musicText);
    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    // Sound
    this.soundText = new Text(this, 0, 0, 'Sound: ' + this.soundState(), 'button');
    this.soundButton = new Button(this, centerX, centerY, 'button', 'button_hover', this.soundText);
    this.soundButton.add(this.soundText);
    this.soundButton.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    // Return to menu button
    this.menuText = new Text(this, 0, 0, 'Go Back', 'button');
    this.menuButton = new Button(this, centerX, centerY + 150, 'button', 'button_hover');
    this.menuButton.add(this.menuText);
    this.menuButton.on('pointerdown', () => {
      this.scene.start(this.previousScene);
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
