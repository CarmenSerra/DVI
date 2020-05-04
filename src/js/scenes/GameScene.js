//import 'phaser';
import Protagonist from '../components/Protagonist.js';

export default class GameScene extends Phaser.Scene
{
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('protagonista', 'assets/images/Alb_prota_dcha_1_conbrazo.png'); //Supongo que lo podemos cargar en el Preloader
    this.load.image('protagonista2', 'assets/images/PNG_Prota_Andando.png');  
    this.load.spritesheet('protagonista2', 'assets/images/PNG_Prota_Andando.png', { frameWidth: 230, frameHeight: 200});
    this.load.image('bg', 'assets/images/War.png');  //Supongo que lo podemos cargar en el Preloader

  }

  create() {
    
    var sprite = this.add.spritesheet(450,200,'protagonista2');
    //this.background  = this.add.image(450,200,'bg');
  

    this.scene.anims.create({ // Carlos
      key: 'standing_sprite',
      frames: this.scene.anims.generateFrameNumbers('protagonista2', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: -1
    });

    sprite.play(standing_sprite);
        //prota = new Prota();
    //this.add.image(400, 300, 'logo2');
    /*this.prueba_protagonista = new Protagonist({
      current : this,
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
     // image: 'protagonista'
    });

    
    //this.prueba_protagonista = this.add.sprite(config.width / 2 - 50, config.height / 2, 'protagonista2');
  
    this.anims.create({
      key:'prueba_animacion',
      frames: this.anims.generateFrameNumbers('protagonista2'),
      frameRate: 10,
      repeat: -1
    });

    var sprite = this.add.sprite(50, 300, 'protagonista2').setScale(4);
    sprite.play('prueba_animacion');
    sprite.anims.setRepeat(7);
    */
  }

  update(time, delta) {
  
  }
};
