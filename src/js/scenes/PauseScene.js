import Button from '../components/Button.js';
import Text from '../components/Text.js';

export default class PauseScene extends Phaser.Scene
{
  constructor() {
    super('Pause');
  }

  init(data) {
    this.previousScene = data.previousScene;
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;

    // Options title
    this.text = new Text(this, this.cameras.main.centerX, 100, 'Pause', 'title');

    // Resume game
    this.resumeText = new Text(this, 0, 0, 'Resume', 'button');
    // Reducir volumen de juego
    this.resumeButton = new Button(this, centerX, centerY - 50, 'button', 'button_hover');
    this.resumeButton.add(this.resumeText);

    this.resumeButton.on('pointerdown', () => {
      this.scene.resume(this.previousScene);
      this.scene.stop();
    });

    // Controls Button
    this.controlsText = new Text(this, 0, 0,'Controls', 'button');
    this.controlsButton = new Button(this, centerX, centerY + 35, 'button', 'button_hover');
    this.controlsButton.add(this.controlsText);
    this.controlsButton.on('pointerdown', () => {
      this.scene.launch('Controls');
      this.scene.sleep();
    });

    // Options button
    this.optionsText = new Text(this, 0, 0, 'Options', 'button');
    this.optionsButton = new Button(this, centerX, centerY + 120, 'button', 'button_hover');
    this.optionsButton.add(this.optionsText);
    this.optionsButton.on('pointerdown', () => {
      this.scene.launch('Options');
      this.scene.sleep();
    });

    // Quit to menu
    this.menuText = new Text(this, 0, 0, 'Quit', 'button');
    this.menuButton = new Button(this, centerX, centerY + 205, 'button', 'button_hover');
    this.menuButton.add(this.menuText);
    this.menuButton.on('pointerdown', () => {
      this.scene.stop(this.previousScene);
      this.scene.start('Title');
    });

    this.pause = this.input.keyboard.addKey('P');
    this.pause.on('down', () => {
      this.scene.get(this.previousScene).cameras.main.setAlpha(1);
      this.scene.resume(this.previousScene);
      this.scene.stop();
    });
  }
}
