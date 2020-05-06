import Text from './Text.js';

export default class LoadingBar extends Phaser.GameObjects.Container
{
  constructor(scene, x, y, width, height) {
    super(scene, x, y);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // Display progress bar
    this.progressBar = scene.add.graphics();
    this.progressBox = scene.add.graphics();

    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);

    // Add loading title
    this.loadingText = new Text(scene, this.x, this.y - 50, 'Loading...', 'load_title');
    this.loadingText.setPosition(this.x - this.loadingText.width / 2, this.y - this.loadingText.height / 2 - 50);
    scene.make.text(this.loadingText);

    // Add percentage in bar
    this.percentText = new Text(scene, 0, 0, '0%', 'load_text');
    this.percentText.setPosition(this.x - this.percentText.width / 2, this.y - this.percentText.height / 2);
    scene.make.text(this.percentText);

    // Add assets load text
    this.assetText = new Text(scene, 0, 0, 'Loading asset: ', 'load_text');
    this.assetText.setPosition(this.x - this.assetText.width / 2, this.y - this.assetText.height / 2 + 50);
    scene.make.text(this.assetText);

    scene.add.existing(this);
  }

  updateBar(value) {
    this.percentText.setText(parseInt(value * 100) + '%');
    this.progressBar.clear();
    this.progressBar.fillStyle(0xffffff, 1);
    this.progressBar.fillRect(this.x - this.width / 2 + 10, this.y - this.height / 2 + 10, 300 * value, 30);
  }

  updateText(filename) {
    this.assetText.setText('Loading asset: ' + filename);
    this.assetText.setPosition(this.x - this.assetText.width / 2, this.y - this.assetText.height / 2 + 50);
  }
}
