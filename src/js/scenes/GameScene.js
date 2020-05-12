//import 'phaser';
import Protagonist from '../components/Protagonist.js';

export default class GameScene extends Phaser.Scene
{
  constructor() {
    super('Game');
  }
 

  preload() {
     
    this.load.tilemapTiledJSON('mapa', 'assets/images/prueba_mapajson.json'); //Mapa creado
    this.load.image('tilesetroad', 'assets/images/road.png'); //Tileset 
  }

  create() {


   //this.prota =  this.add.sprite(0,0,'protagonista2');

   /*Animacion derecha*/
    this.anims.create({
      key: 'right',
      frames:  this.anims.generateFrameNumbers('protagonista_andando', { start: 0, end: 2 }),
      frameRate: 30,
      repeat: -1
  });

  /*Animacion izquierda*/
  this.anims.create({
    key: 'left',
    frames:  this.anims.generateFrameNumbers('protagonista_andando', { start: 3, end: 5 }),
    frameRate: 20,
    repeat: -1
});

/*Saltar*/ 

this.anims.create({
  key: 'jump',
  frames:  this.anims.generateFrameNumbers('protagonista_saltando', { start: 0, end: 4 }),
  frameRate: 10,
  repeat: -1
});

/*let backg  = this.add.image(0,0,'bg').setOrigin(0);
  
backg.displayWidth = this.sys.game.config.width;
backg.displayHeight = this.sys.game.config.height;
backg.scaleX = backg.scaleY; */

/*Configurando Background*/
this.backg = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, 'bg');
this.backg.setOrigin(0, 0);
this.backg.setScrollFactor(0);


this.ruins = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, 'capa1');
this.ruins.setOrigin(0, 0);
this.ruins.setScrollFactor(0);

this.houses2 = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, 'capa2');
this.houses2.setOrigin(0, 0);
this.houses2.setScrollFactor(0);

//Aquí debería añadir el road.

this.map = this.make.tilemap({ 
  key: 'mapa', 
  tileWidth: 89, 
  tileHeight: 89 
});

this.tileset1 = this.map.addTilesetImage('road', 'tilesetroad');

/*Añadir capas*/
this.backgroundLayer = this.map.createStaticLayer('suelo', this.tileset1);

/*Añadiendo prota y camaras*/


this.prota  =  new Protagonist({
  current: this,
  x: this.cameras.main.centerX,
  y: this.cameras.main.centerY
});

this.physics.add.existing(this);

   //this.prota= this.physics.add.sprite(200, window.innerHeight - 150, 'protagonista_andando');
   //this.prota.setBounce(0.15);
   //this.prota.setCollideWorldBounds(true);
   //this.prota.body.setGravityY(300);

   this.myCam = this.cameras.main;
   this.myCam.setBounds(0, 0, this.sys.game.config.width * 3, this.sys.game.config.height);
   this.myCam.startFollow( this.prota );


      
 

    //backg.y = this.sys.game.config.height;
    //.x = this.sys.game.config.width;
    //backg.x = backg.displayWidth * .2;

   /* this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'war1_sky');
    this.bg.setOrigin(0, 0);
    this.bg.setScrollFactor(0);
*/

   
   

  }

  update(time, delta) {
    
    let cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.prota.setVelocityX(-160);
      this.prota.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.prota.setVelocityX(160);
      this.prota.anims.play('right', true);
    }
    else if(cursors.up.isDown){ //Se activa la animación pero no salta demasiado
      this.prota.setVelocityX(160);
        this.prota.anims.play('jump', true);
    }
    else if(cursors.space.isDown){ //Una vez lo paro nunca se reinicia
      this.prota.setVelocityX(0);
      this.anims.stop();
    }
  
    /*Moviendo Background*/

    this.backg.tilePositionX +=5;
    this.ruins.tilePositionX +=5;
    this.houses2.tilePositionX +=5;


    this.backg.tilePositionX = this.myCam.scrollX * .2;
    this.ruins.tilePositionX = this.myCam.scrollX * .3;
    this.houses2.tilePositionX = this.myCam.scrollX * .4;

  }
};
