//import 'phaser';
import config from './config/config.js';
import Model from './Model.js';
import GameScene from './scenes/GameScene.js';
import BootScene from './scenes/BootScene.js';
import PreloaderScene from './scenes/PreloaderScene.js';
import TitleScene from './scenes/TitleScene.js';
import ControlsScene from './scenes/ControlsScene.js';
import OptionsScene from './scenes/OptionsScene.js';
import CreditsScene from './scenes/CreditsScene.js';
import PauseScene from './scenes/PauseScene.js';
import GameOverScene from './scenes/GameOverScene.js';
import LevelCompletedScene from './scenes/LevelCompletedScene.js';

class Game extends Phaser.Game
{
  constructor() {
    super(config);

    const model = new Model();

    this.globals = { model, bgMusic: null };
    this.scene.add('Title', TitleScene);
    // this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Controls', ControlsScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Pause', PauseScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LevelCompleted', LevelCompletedScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Title');
  }
}

window.game = new Game();
