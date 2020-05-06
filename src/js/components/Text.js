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
   * @return {Text}       Text object
   */
  constructor(scene, x, y, text, type) {
    super(scene, x, y, text, { fontFamily: 'IsWasted', fontSize: '18px', fill: '#fff' });

    this.setStyle(this.generateStyles(type));

    scene.add.existing(this);
  }

  /**
   * Creates text object according to type key
   * @param  {string} type Type of text
   * @return {object}      Text styles
   */
  generateStyles(type) {
    const textStyles = {
      default: { fontFamily: 'IsWasted', fontSize: '18px', fill: '#fff' },
      button: { fontFamily: 'IsWasted', fontSize: '32px', fill: '#fff' },
      title: { fontFamily: 'TooMuchInk', align: 'center', fontSize: '60px', fill: '#fff' },
      subtitle: { fontFamily: 'TooMuchInk', fontSize: '46px', fill: '#fff' },
      credits: { fontFamily: 'TooMuchInk', fontSize: '30px', fill: '#fff', align: 'center' },
      load_title: { fontFamily: 'Mania', fontSize: '22px', fill: '#fff', align: 'center' },
      load_text: { fontFamily: 'Mania', fontSize: '20px', fill: '#fff', align: 'center' },
    };

    if (type in textStyles) {
      return textStyles[type];
    }

    return textStyles.default;
  }
}
