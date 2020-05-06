import LoadingBar from '../components/LoadingBar.js';

export default class PreloaderScene extends Phaser.Scene
{
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    let width = this.cameras.main.centerX;
    let height = this.cameras.main.centerY;

    this.add.image(width, height - 250, 'imagen-inicio');

    // Display progress bar
    this.loadingBar = new LoadingBar(this, this.cameras.main.centerX, this.cameras.main.centerY, 320, 50);

    // Update progress bar
    this.load.on('progress', (value) => this.loadingBar.updateBar(value));

    // Update file progress text
    this.load.on('fileprogress', (file) => this.loadingBar.updateText(file.key));

    this.load.on('complete', () => {
      this.loadingBar.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(800, this.ready, [], this);

    // Game assets load
    this.load.image('protagonista', 'assets/images/Alb_prota_dcha_1_conbrazo.png');
    //Supongo que lo podemos cargar en el Preloader
    this.load.spritesheet('protagonista2', 'assets/images/PNG_Prota_Andando.png', { frameWidth: 130, frameHeight: 200});
    // this.load.image('bg', 'assets/images/War.png');  //Supongo que lo podemos cargar en el Preloader
    this.load.image('war1_sky', 'assets/images/backgrounds/War1/Bright/sky.png');
    this.load.image('war1_sun', 'assets/images/backgrounds/War1/Bright/sun.png');
    this.load.image('war1_ruins', 'assets/images/backgrounds/War1/Bright/ruins.png');
    this.load.image('war1_house3', 'assets/images/backgrounds/War1/Bright/house3.png');
    this.load.image('war1_house2', 'assets/images/backgrounds/War1/Bright/houses2.png');
    this.load.image('war1_house1', 'assets/images/backgrounds/War1/Bright/houses1.png');
    this.load.image('war1_fence', 'assets/images/backgrounds/War1/Bright/fence.png');
    this.load.image('war1_road', 'assets/images/backgrounds/War1/Bright/road.png');
  }

  ready() {
    this.readyCount++;
    console.log(this.readyCount);
    if (this.readyCount === 2) {
      this.scene.start('Game');
    }
  }
};
