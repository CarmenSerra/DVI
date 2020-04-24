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

    this.button = this.currentScene.add.sprite(0, 0, options.image).setInteractive();
    this.text = this.currentScene.add.text(0, 0, options.text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => this.currentScene.scene.start(options.target));

    this.button.on('pointerover', () => this.button.setTexture(options.alt));

    this.button.on('pointerout', () => this.button.setTexture(options.image));

    this.currentScene.add.existing(this);
  }

  // - create function to place button in center horizontally
  // and with offset if exists vertically
  //
  // - Change all buttons to use this class
}
