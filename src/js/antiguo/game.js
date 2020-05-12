

export default class Game extends Phaser.Scene
{
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    // Aqui se precargan las imagenes para el juego, para que vaya mas rapido.

    /* FONDO PARALLAX */
    this.load.image('war1_sky', 'assets/images/backgrounds/War1/Bright/sky.png');
    this.load.image('war1_sun', 'assets/images/backgrounds/War1/Bright/sun.png');
    this.load.image('war1_ruins', 'assets/images/backgrounds/War1/Bright/ruins.png');
    this.load.image('war1_house3', 'assets/images/backgrounds/War1/Bright/house3.png');
    this.load.image('war1_house2', 'assets/images/backgrounds/War1/Bright/houses2.png');
    this.load.image('war1_house1', 'assets/images/backgrounds/War1/Bright/houses1.png');
    this.load.image('war1_fence', 'assets/images/backgrounds/War1/Bright/fence.png');
    this.load.image('war1_road', 'assets/images/backgrounds/War1/Bright/road.png');

    /*PROTAGONISTA*/
    this.load.atlas('protagonista','./assets/images/PNG_Final_Todos_Los_Sprites_5','LO MISMO PERO CON EL .JSON');

    /*ENEMIGOS*/
    this.load.atlas('protagonista','./assets/images/PNG_Final_Todos_Los_Sprites_5','LO MISMO PERO CON EL .JSON');

    /*ENEMIGO RUNNER*/
    this.load.atlas('protagonista','./assets/images/PNG_Final_Todos_Los_Sprites_5','LO MISMO PERO CON EL .JSON');

    // this.load.image('background','assets/images/possible_background_1.png');

    /* AUDIO */
    this.load.audio(
      "prueba",
      "./assets/musica/myst-on-the-moor-by-kevin-macleod-from-filmmusic-io_bucle_misterioso_DEMOMENTOLAMEJOR.mp3"
    );
    /* Protagonista_comiendo */
    this.load.audio(
      "prueba_comer",
      "./assets/musica/sonidos_concretos/Eating-SoundBible.com-1470347575.mp3"
    );
    /* Enemigo_zombie */
    this.load.audio(
      "prueba_zombie",
      "./assets/musica/sonidos_concretos/Zombie Brain Eater-SoundBible.com-1076387080.mp3"
    );
  }

  create() {
    // Este se ejecuta justo despues del preload.

    // this.add.image(400,300,'background');

    /* AUDIO */
    this.sound.pauseOnBlur = false;
    let prueba_sonido = this.sound.add("prueba");
    prueba_sonido.play();

    /* FONDO */
    //addBackground(scene){}

    /* SUELO 
    addGround(scene, map) {
      //Necesitamos un tileset para esto
      let tileset = map.addTilesetImage('tilebackground', 'tiles', 64, 64);
      let ground = map.addTilesetImage('collision', 'collision_tile', 64, 64);
      ground.setCollisionFromCollisionGroup();

      scene.physics.world.bounds.widht = ground.widht;
      scene.physics.world.bounds.height = ground.height;

      return ground;
    }*/

    /*CAMARA
    addCamera(scene, player, ground) {
      //Para que no se salga del mapa
      scene.cameras.main.setBounds(0, 0, ground.widht, ground.height);
      scene.cameras.main.startFollow(player);
    }*/

    /*SONIDOS PROTAGONISTA
    audio_comiendo() {
      let comer = this.sound.add("prueba_comer", {
        volume:0.50,
      });

      comer.play();
    }*/

    /*SONIDOS ENEMIGOS
    audio_comiendo() {
      let zombie = this.sound.add("prueba_zombie", {
        volume:0.50,
      });

      zombie.play();
    }*/

    /*SPAWNS*/

    /*PROTAGONISTA
    spawnPlayer(scene, x, y, ground) {
      let albon = new prota(scene, 0, 100);

      //Animaciones en clase aparte prota.js
      albon.createAnims();

      return albon;
    }*/

    /*ENEMIGOS
    spawnEnemigo_Runner(scene, x, y, enemies) {
      let enemigo_runn = new enemigo_runner(scene, 0, 200);

      //Animaciones en clase aparte enemigo_runner.js
      enemigo_runn.createAnims();
      //enemies.add(enemigo_runn);
    }*/
  }

  update() {
  }
}
