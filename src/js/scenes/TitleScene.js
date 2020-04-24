import config from '../config/config.js';
import prota from '../prota.js';

export default class TitleScene extends Phaser.Scene
{
  constructor() {
    super('Title');
  }

  preload() {
    // this.load.spritesheet('meatboy', 'assets/PNG_Final_Todos_Los_Sprites_2.png',108,100);
  }

  create() {
    // Game
    this.gameButton = this.add.sprite(250, 125, 'button').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Play!', {
      fontFamily: 'IsWasted',
      fontSize: '32px',
      fill: '#fff'
    });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', (pointer) => this.scene.start('Game'));

    // Options
    this.optionsButton = this.add.sprite(250, 125, 'button').setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, 'Options', {
      fontFamily: 'IsWasted',
      fontSize: '32px',
      fill: '#fff'
    });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on('pointerdown', (pointer) => this.scene.start('Options'));

    // Credits
    this.creditsButton = this.add.sprite(250, 125, 'button').setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, 'Credits', { fontFamily: 'IsWasted', fontSize: '32px', fill: '#fff' });

    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on('pointerdown', (pointer) => this.scene.start('Credits'));

    // Input events
    this.input.on('pointerover', (event, gameObjects) => gameObjects[0].setTexture('button_hover'));

    this.input.on('pointerout', (event, gameObjects) => gameObjects[0].setTexture('button'));

    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('myst', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - offset * 100, config.width, config.height)
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
};
