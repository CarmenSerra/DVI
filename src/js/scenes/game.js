import Archer from './../archer.js'
import Flying_Eye from '../enemies/flying_eye.js';
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
        this.load.spritesheet('archer', 'assets/images/archer/spr_ArcherIdle_strip_NoBkg_P.png',
            { frameWidth: 128, frameHeight: 48 });

        this.load.spritesheet('archer_run', 'assets/images/archer/spr_ArcherRun_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 48 });

        this.load.spritesheet('archer_jump', 'assets/images/archer/spr_ArcherJumpAndFall_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 48 });

        this.load.spritesheet('archer_dash', 'assets/images/archer/spr_ArcherDash_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 48 });

        this.load.spritesheet('archer_attack', 'assets/images/archer/spr_ArcherAttack_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 48 });

        this.load.spritesheet('archer_death', 'assets/images/archer/spr_ArcherDeath_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 48 });

        this.load.spritesheet('archer_front_attack', 'assets/images/archer/spr_ArcherMelee_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 48  });


        //------------ENEMIGOS--------------
        //---------FLYING_EYE-------------
        this.load.spritesheet('Flight_flying_eye', 'assets/images/enemies/Flight_flying_eye.png',
            { frameWidth: 150, frameHeight: 50 });

        this.load.spritesheet('Attack_flying_eye', 'assets/images/enemies/Attack_flying_eye.png',
            { frameWidth: 50, frameHeight: 50 });



    }



    spawnPlayer(scene, x, y, layerground) {
        let archer = new Archer(scene, x, y);
        archer.createAnims(); //crear las animaciones del archer
        return archer;
    }

    spawnFlying_Eye(scene, x, y, enemies) {
        let flying_eye = new Flying_Eye(scene, x, y);
        flying_eye.createAnims(); //crear las animaciones del archer
        //flying_eye.setScale(1.5);
        flying_eye.play('flight', true);
        enemies.add(flying_eye); //Dice que no está definido
        return flying_eye;
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
                /*back_ground = scene.add.image(0, 100, "bg").setOrigin(0, 0);
                back_ground.setScale(2, 1.26);
                back_ground = scene.add.image(0, 100, "bg1").setOrigin(0, 0);
                back_ground.setScale(2, 1.26);
                back_ground = scene.add.image(0, 100, "bg2").setOrigin(0, 0);
                back_ground.setScale(2, 1.26);
                back_ground = scene.add.image(0, 100, "bg3").setOrigin(0, 0);
                back_ground.setScale(2, 1.26);
                back_ground = scene.add.image(0, 100, "bg4a").setOrigin(0, 0);
                back_ground.setScale(2, 1.26);*/
                //this.bg_1 = this.add.tileSprite(0, 0,"bg");
                this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg")
                this.bg_1.setOrigin(0,0);
                this.bg_1.setScrollFactor(0);
                //this.bg_1.setScale(2, 1.26)

                this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg1")
                this.bg_1.setOrigin(0,0);
                this.bg_1.setScrollFactor(0);
                //this.bg_1.setScale(2, 1.26)

                this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg2")
                this.bg_1.setOrigin(0,0);
                this.bg_1.setScrollFactor(0);
                //this.bg_1.setScale(2, 1.26)

                this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg3")
                this.bg_1.setOrigin(0,0);
                this.bg_1.setScrollFactor(0);
                //this.bg_1.setScale(2, 1.26);
                break;
        }
    

    }

    //--------SUELO

    addGround(scene, map) {
        //Añadimos los tileset utilizados 
        // let tileset = map.addTilesetImage('tilemap', 'patronesTiled', this.tileSize, this.tileSize);
        this.tileset1 = this.map.addTilesetImage('tiles', 'patronesTiled');
        //this.platforms= map.createDynamicLayer('ground', this.tileset1 ); //ground es como se llama en el Tiled
        this.platforms = this.map.createStaticLayer('ground', this.tileset1, 0, 100);
        // layerground = this.platforms;
        //this.platforms.setCollisionFromCollisionGroup(-1, true);
        this.platforms.setCollisionByExclusion(-1, true); // <- a medias
        //this.platforms.setCollisionByProperty({ colisiona: true });
        //this.platforms.setCollisionBetween(0, 999); <- a medias

        return this.platforms;
    }

    //-------CAMARA
    addCamera(scene, player, groundLayer) {
        //camara que sigue al jugador
        scene.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height); //para que no se salga del mapa
        scene.cameras.main.startFollow(player);
        return scene.cameras.main;
    }


    create() {

        //------------MAPA
        this.level = 1;
        this.map = this.addMap(this, this.level);
        this.background = this.addBackGround(this, this.level);
        this.platforms = this.addGround(this, this.map);
        this.platforms.setScale(2);


        //------------JUGADOR
        this.archer = this.spawnPlayer(this, 0, 200, this.platforms);
        this.archer.setScale(1.35);
        this.collider = this.physics.add.collider(this.archer, this.platforms);

        //------------CAMARA
       this.mycam = this.addCamera(this, this.archer, this.platforms);


        //------------ENEMIGOS
       /* this.enemies = this.physics.add.group();
        let flying_eye_1 = new Flying_Eye(this, 100, 250);
        this.enemies.add(flying_eye_1);
        this.enemies.getChildren().forEach(function(item) {
        item.create();
        item.createAnims();
        }, this);*/

        this.enemies = this.physics.add.group();
        this.flying_eye = this.spawnFlying_Eye(this, 700, 300, this.enemies);
        
        //this.flying_eye.setScale(1.35);
        this.collider = this.physics.add.collider(this.flying_eye, this.platforms);

        

        //this.physics.collider(this.enemies,this.platforms);
        //this.collider2 = this.physics.add.collider(this.enemies, this.platforms);
        //this.spawnFlying_Eye(this,0,300,this.enemies);
    }

    update(time, delta) {
        this.bg_1.tilePositionX = this.archer.x *.3;
        //------------JUGADOR
        //this.archer.update(this);

        //------------ENEMIGOS
        /*this.enemies.getChildren().forEach(function(item) {
        item.preUpdate(time,delta);
        }, this);*/
    }

}