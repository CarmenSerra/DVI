//import 'phaser';

export default class PreloaderScene extends Phaser.Scene
{
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    let width = this.cameras.main.width;
    let height = this.cameras.main.height;

    this.add.image(width / 2, height / 2 - 200, 'logo');

    // Display progress bar
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();

    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });

    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });

    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      x: width / 2,
      y: width / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });

    assetText.setOrigin(0.5, 0.5);

    // Update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // Update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);

    // Here we load images for main screen game (title and buttons)
    this.load.image('logo', 'assets/images/possible_background_1.png');
    this.load.image('button', 'assets/images/test_button.png');
    this.load.image('button_hover', 'assets/images/test_button_hover.png');
    this.load.audio('myst', 'assets/musica/myst-on-the-moor.mp3');
    // Maybe move before game executes (play scene)
  }

  ready() {
    //this.scene.start('Options');
    this.readyCount++;

    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};
