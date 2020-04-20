export class MenuButton extends Phaser.GameObjects.Text
{
  create() {
    let clickCount = 0;
    this.clickCountText = this.add.text(100, 200, '');

    this.clickButton = new Phaser.GameObjects.Text()
  }
}
