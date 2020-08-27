import Archer from './../archer.js'
//Los demas aqui tambien

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
        this.tileSize = 16; //No se si son exactamente 64
        //this.tileIndez = 6;
    }

    preload() { //Es para todo el juego, aqui se van a cargar todos los recursos

        //---------------MAPAS------------------


        //Tiles
        //this.load.image('tiles', 'assets/images/background/tiles.png');
        this.load.image('patronesTiled', 'assets/images/background/tiles.png');
        //JSON
        //this.load.tilemapTiledJSON('mapa1','assets/images/background/level1.json'); //Nivel 1
        this.load.tilemapTiledJSON('tilemap', 'assets/images/background/level1y_prueba_colision.json');
        //Background
        // this.load.image('bg', 'assets/images/background/Cuevas_1.png');
        this.load.image('bg', 'assets/images/background/background1.png');
        this.load.image('bg1', 'assets/images/background/background2.png');
        this.load.image('bg2', 'assets/images/background/background3.png');
        this.load.image('bg3', 'assets/images/background/background4a.png');
        // this.load.image('bg4', 'assets/images/background/background4b.png');



        //---------------SPRITESHEETS------------------
        //---------PROTAGONISTA--------------
        this.load.spritesheet('archer', 'assets/images/archer/spr_ArcherIdle_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_run', 'assets/images/archer/spr_ArcherRun_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_jump', 'assets/images/archer/spr_ArcherJumpAndFall_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_dash', 'assets/images/archer/spr_ArcherDash_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_attack', 'assets/images/archer/spr_ArcherAttack_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_death', 'assets/images/archer/spr_ArcherDeath_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_front_attack', 'assets/images/archer/spr_ArcherMelee_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        //---------ENEMIGOS--------------


    }



    spawnPlayer(scene, x, y, layerground) {
        let archer = new Archer(scene, x, y);
        archer.createAnims(); //crear las animaciones del archer
        return archer;
    }

    //----------MAPA POR NIVELES
    addMap(scene, level) {
        let mapa;
        switch (level) {
            case 1: mapa = scene.make.tilemap({
                key: 'tilemap',
                tileWidth: 16,
                tileHeight: 16
            }); break;
        }
        return mapa;
    }



    //-------BACKGROUND 
    addBackGround(scene, level) {
        let back_ground;

        switch (level) {
            case 1:
                back_ground = scene.add.image(0, 100, "bg").setOrigin(0, 0);
                back_ground.setScale(2,1.26);
                back_ground = scene.add.image(0, 100, "bg1").setOrigin(0, 0);
                back_ground.setScale(2,1.26);
                back_ground = scene.add.image(0, 100, "bg2").setOrigin(0, 0);
                back_ground.setScale(2,1.26);
                back_ground = scene.add.image(0, 100, "bg3").setOrigin(0, 0);
                back_ground.setScale(2,1.26);
                back_ground = scene.add.image(0, 100, "bg4a").setOrigin(0, 0);
                back_ground.setScale(2,1.26);

                break;
        }
        back_ground.on('pointerup', function () {
            if (scene.scale.isFullscreen) {
                scene.scale.stopFullscreen();
            }
            else {
                scene.scale.startFullscreen();
            }
        }, scene);

    }

    //--------SUELO

    addGround(scene, map) {
        //Añadimos los tileset utilizados 
        // let tileset = map.addTilesetImage('tilemap', 'patronesTiled', this.tileSize, this.tileSize);
        this.tileset1 = this.map.addTilesetImage('tiles', 'patronesTiled');
        // let layerground = map.createDynamicLayer('ground', tileset); //ground es como se llama en el Tiled
        this.platforms = this.map.createStaticLayer('ground', this.tileset1, 0, 100);

        this.platforms.setCollisionFromCollisionGroup(-1, true);
        //Bounds del mundo
        scene.physics.world.bounds.width = this.platforms.width;
        scene.physics.world.bounds.height = this.platforms.height;

        return this.platforms;
    }

    //-------CAMARA
    addCamera(scene, player, groundLayer) {
        //camara que sigue al jugador
        scene.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height); //para que no se salga del mapa
        scene.cameras.main.startFollow(player);
    }


    create() {

        //------------MAPA
        this.level = 1;
        this.map = this.addMap(this, this.level);
        this.background = this.addBackGround(this, this.level);
        this.platforms = this.addGround(this, this.map);
        this.platforms.setScale(2);
        

        //------------JUGADOR
        this.archer = this.spawnPlayer(this, 0, 100, this.platforms);
        this.archer.setScale(1.35);
        this.collider = this.physics.add.collider(this.archer, this.platforms);

        //------------CAMARA
        this.addCamera(this, this.archer, this.platforms);
    }

    update(time, delta) {
        this.archer.update(this);
    }

}