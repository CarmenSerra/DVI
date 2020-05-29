/**
 * Text class
 */
export default class Text extends Phaser.GameObjects.Text
{
  /**
   * Constructs Text object
   * @param  {Phase.Scene} scene Game scene where text is added
   * @param  {number} x     X position
   * @param  {number} y     Y position
   * @param  {string} text  Content displayed on text
   * @param  {string} type  Type of text (see generateStyle function)
   */
  constructor(scene, x, y, text, type) {
    super(scene, x, y, text, { fontFamily: 'IsWasted', fontSize: '18px', fill: '#fff' });

    this.setStyle(this.generateStyles(type));
    this.setPosition(x - this.width / 2, y - this.height / 2);

    scene.add.existing(this);
  }

  /**
   * Creates text object according to type key
   * @param  {string} type Type of text
   * @return {object}      Text styles
   */
  generateStyles(type) {
    let defaultProps = {
      fontFamily: 'IsWasted',
      fontSize: '18px',
      align: 'center',
      fill: '#fff',
      stroke: '#333',
      strokeThickness: 3,
    };

    const styles = {
      button: { fontFamily: 'IsWasted', fontSize: '32px' },
      title: { fontFamily: 'TooMuchInk', fontSize: '70px', strokeThickness: 6 },
      subtitle: { fontFamily: 'TooMuchInk', fontSize: '46px' },
      credits: { fontFamily: 'TooMuchInk', fontSize: '30px' },
      load_title: { fontFamily: 'Mania', fontSize: '22px' },
      load_text: { fontFamily: 'Mania', fontSize: '20px' },
      controls: { fontFamily: 'HydratingLip', fontSize: '20px' },
      game_title: { fontFamily: 'Sanguis', fontSize: '150px', fill: '#ab2727', stroke: '#000', strokeThickness: 10 },
      victory: { fontFamily: 'Mania', fontSize: '100px', fill: '#ffd700', stroke: '#b8860b', strokeThickness: 10 },
      victory2: { fontFamily: 'Mania', fontSize: '160px', fill: '#ffd700', stroke: '#b8860b', strokeThickness: 10 },
      gameover: { fontFamily: 'IsWasted', fontSize: '200px', fill: '#8b0000', stroke: '#3f0000', strokeThickness: 10 },
    };

    if (styles.hasOwnProperty(type)) {
      return Object.assign(defaultProps, styles[type]);
    }

    return defaulProps;
  }
}
