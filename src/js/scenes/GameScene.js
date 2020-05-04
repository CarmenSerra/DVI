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
    
   //var sprite = this.add.spritesheet(450,200,'protagonista2');
    this.background  = this.add.image(750,250,'bg');
  

    this.scene.anims.create({ // Carlos
      key: 'standing_sprite',
      frames: this.scene.anims.generateFrameNumbers('protagonista2', { start: 0, end: 3 }),
      frameRate: 2,
      repeat: -1
    });

    sprite.play(standing_sprite);

  }

  update(time, delta) {
  
  }
};
