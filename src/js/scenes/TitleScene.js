import config from '../config/config.js';
import prota from '../antiguo/prota.js';
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
    this.load.image('background', 'assets/images/backgrounds/War1/Bright/War.png');
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    this.add.image(centerX, centerY, 'background').setAlpha(0.45);

    this.gameTitle = new Text(this, centerX, centerY - 200, 'MEATBALLYPSE', 'game_title');

    // Play button
    this.playText = new Text(this, 0, 0, 'Play!', 'button');
    this.playButton = new Button(this, centerX, centerY - 50, 'button', 'button_hover', 'Preloader');
    this.playButton.add(this.playText);

    // Controls Button
    this.controlsText = new Text(this, 0, 0,'Controls', 'button');
    this.controlsButton = new Button(this, centerX, centerY + 50, 'button', 'button_hover');
    this.controlsButton.add(this.controlsText);
    this.controlsButton.on('pointerdown', () => {
      this.scene.launch('Controls', { previousScene: 'Title' });
      this.scene.sleep();
    });

    // Options button
    this.optionsText = new Text(this, 0, 0, 'Options', 'button');
    this.optionsButton = new Button(this, centerX, centerY + 150, 'button', 'button_hover');
    this.optionsButton.add(this.optionsText);
    this.optionsButton.on('pointerdown', () => {
      this.scene.launch('Options', { previousScene: 'Title' });
      this.scene.sleep();
    });

    // Credits button
    this.creditsText = new Text(this, 0, 0, 'Credits', 'button');
    this.creditsButton = new Button(this, centerX, centerY + 250, 'button', 'button_hover');
    this.creditsButton.add(this.creditsText);
    this.creditsButton.on('pointerdown', () => {
      this.scene.launch('Credits', { previousScene: 'Title' });
      this.scene.sleep();
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    // Mover a game
    /*this.pause = this.input.keyboard.addKey('P');
    this.pause.on('down', () => {
      console.log('Pressed!');
      this.cameras.main.setAlpha(0.5);
      this.scene.launch('Pause', { previousScene: 'Title' });
      this.scene.pause();
    });

    this.pause = this.input.keyboard.addKey('K');
    this.pause.on('down', () => {
      console.log('Pressed!');
      this.scene.start('GameOver');
    });

    this.pause = this.input.keyboard.addKey('L');
    this.pause.on('down', () => {
      console.log('Pressed!');
      this.scene.start('LevelCompleted');
    });*/

    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('myst', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  update(time, delta) {
    if (this.cursors.up.isDown) {
      // desplazar foco arriba
    } else if (this.cursors.down.isDown) {
      // desplazar foco abajo
    }
  }
};
