/**
 * Button Class
 */
export default class Button extends Phaser.GameObjects.Container
{
  /**
   * Constructs Button object
   *
   * @param  {object} options Button options
   *         current: the current scene where button is placed
   *         x: x position of the button
   *         y: y position of the button
   *         image: default showed image on button
   *         alt: alternative showed image on button
   *         text: displayed text in button
   *         target: target scene when button is pressed
   * @return {Button}
   */
  constructor(options) {
    super(options.current);

    this.currentScene = options.current;
    this.x = options.x;
    this.y = options.y;

    this.button = this.currentScene.add.sprite(0, 0, options.image);

    this.text = options.text;

    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.setSize(this.button.width, this.button.height);

    this.setInteractive();

    if (options.target) {
      this.on('pointerdown', () => this.currentScene.scene.start(options.target));
    }

    this.on('pointerover', () => this.button.setTexture(options.alt));

    this.on('pointerout', () => this.button.setTexture(options.image));

    this.currentScene.add.existing(this);
  }
}
