import config from '../config/config.js';
import prota from '../prota.js';
import Button from '../components/Button.js';

export default class TitleScene extends Phaser.Scene
{
  constructor() {
    super('Title');
  }

  preload() {
    // this.load.spritesheet('meatboy', 'assets/PNG_Final_Todos_Los_Sprites_2.png',108,100);
  }

  create() {
    // Play button
    this.playButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY - 50,
      image: 'button',
      alt: 'button_hover',
      text: 'Play!'
    });

    this.playButton.on('pointerdown', (pointer) => this.scene.start('Game'));

    // Options button
    this.optionsButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY + 50,
      image: 'button',
      alt: 'button_hover',
      text: 'Options'
    });

    this.optionsButton.on('pointerdown', (pointer) => this.scene.start('Options'));

    // Credits button
    this.creditsButton = new Button({
      current: this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY + 150,
      image: 'button',
      alt: 'button_hover',
      text: 'Credits'
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
