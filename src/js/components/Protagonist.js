/**
 * Protagonist Class
 */
export default class Protagonist extends Phaser.GameObjects.Container
{
  /**
   * Constructs Protagonist object
   *
   * @param  {object} character Protagonist character
   *         current: the current scene where Protagonist is placed
   *         x: x position of the Protagonist
   *         y: y position of the Protagonist
   *         image: default showed image on Protagonist
   *         alt: alternative showed image on Protagonist
   *         text: displayed text in Protagonist
   *         target: target scene when Protagonist is pressed
   * @return {Protagonist}
   */
  constructor(character) {
    super(character.current);

    this.currentScene = character.current;
    this.x = character.x;
    this.y = character.y;


   
      this.scene.add.existing(spriteInterno)
      this.add(spriteInterno)

    this.Protagonist = this.currentScene.add.sprite(50, 650, character.image);
    this.scene.add.existing(this.Protagonist);
    this.add(this.Protagonist);
    //this.text = this.currentScene.add.text(0, 0, character.text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.Protagonist); //Igua no me hace falta 

    
    //this.add(this.text);

    this.setSize(this.Protagonist.width, this.Protagonist.height); 

    //this.setInteractive();

  /*  if (character.target) {
      this.on('pointerdown', () => this.currentScene.scene.start(character.target));
    }

    this.on('pointerover', () => this.Protagonist.setTexture(character.alt));

    this.on('pointerout', () => this.Protagonist.setTexture(character.image));

    this.currentScene.add.existing(this);*/
  }
}
