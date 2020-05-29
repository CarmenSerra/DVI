/**
 * Button Class
 */
export default class Button extends Phaser.GameObjects.Container
{
  /**
   * Constructs Button object
   * @param  {Phase.Scene} scene Game scene where button is added
   * @param  {number} x     X position
   * @param  {number} y     Y position
   * @param  {string} image  image displayed on button
   * @param  {string} alt  alt image displayed on pointer over button
   * @param  {string} target scene to start on pointer down
   */
  constructor(scene, x, y, image, alt, target) {
    let button = scene.add.sprite(0, 0, image);

    super(scene, x, y, button);

    this.setSize(button.width, button.height);

    this.setInteractive();

    if (target) {
      this.on('pointerdown', () => scene.scene.start(target));
    }

    this.on('pointerover', () => button.setTexture(alt));

    this.on('pointerout', () => button.setTexture(image));

    scene.add.existing(this);
  }
}
