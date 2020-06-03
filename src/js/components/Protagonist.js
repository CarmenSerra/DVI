/**
 * Protagonist Class
 */
export default class Protagonist extends Phaser.GameObjects.Container
{
  constructor(current, x, y, sprite) {
      //constructor(character) {

    super(current, x, y);

    /*this.currentScene= character.current;
    this.x = character.x;
    this.y = character.y;*/
    this.sprite =  this.current.add.sprite(0, 0, 'protagonista_andando'); //El 0,0 es del container 
    this.add(this.sprite);

    this.setSize(this.sprite.width, this.sprite.height);
    this.current.add.existing(this);
    this.current.physics.add.existing(this);

   /* const spriteInterno = this.currentScene.add.sprite(0, 0, 'protagonista_andando'); //El 0,0 es del container 
    //const spriteInterno = this.currentScene.physics.add.sprite(0, 0, 'protagonista_andando');
    this.scene.add.existing(spriteInterno);
    this.add(spriteInterno);*/
    

    //this.Protagonist = this.currentScene.add.sprite(50, 650, character.image);
    //Phaser.Display.Align.In.Center(this); 

    //this.add(this);
    
    //this.setSize(this.Protagonist.width, this.Protagonist.height); 

   

    //this.currentScene.add.existing(this);

    //Para la animación

    /*create(){
      
    this.scene.anims.create({ // Carlos
      key: 'standing_sprite',
      frames: this.scene.anims.generateFrameNumbers('protagonista2', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: -1
    });
    }*/


  }


  

   
}
