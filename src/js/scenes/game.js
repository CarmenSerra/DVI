import Archer from './../archer.js'
import Flying_Eye from '../enemies/flying_eye.js';
import Goblin from '../enemies/goblin.js';
import Skeleton from '../enemies/skeleton.js';
import Level1 from './level1.js';
import Arrow from './../arrow.js';
//import Level1 from './../scenes/level1.js'

//Los demas aqui tambien

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
        this.tileSize = 16;
        this.posHeart = 10;

    }

    preload() { //Es para todo el juego, aqui se van a cargar todos los recursos

        //---------------MAPAS-----------------
        //---------TILES--------------
        this.load.image('patronesTiled', 'assets/images/background/tiles.png');

        //---------JSON--------------
        this.load.tilemapTiledJSON('mapa1', 'assets/images/background/level1_def.json');

        //---------BACKGROUND--------------
        this.load.image('bg1', 'assets/images/background/background1.png');
        this.load.image('bg2', 'assets/images/background/background2.png');
        this.load.image('bg3', 'assets/images/background/background3.png');
        this.load.image('bg4a', 'assets/images/background/background4a.png');
        //this.load.image('bg4', 'assets/images/background/background4b.png');

        //---------------BOTONES------------------
        this.load.image('play_button', "assets/images/play_button.png");

        //---------------SPRITESHEETS------------------
        //---------PROTAGONISTA--------------
        this.load.spritesheet('archer', 'assets/images/archer/Archer_Idle.png',
            { frameWidth: 41, frameHeight: 40 });

        this.load.spritesheet('archer_run', 'assets/images/archer/Archer_Run.png',
            { frameWidth: 43, frameHeight: 33 });

        this.load.spritesheet('archer_jump', 'assets/images/archer/Archer_JumpAndFall.png',
            { frameWidth: 41, frameHeight: 45 });

        this.load.spritesheet('archer_dash', 'assets/images/archer/Archer_Dash.png',
            { frameWidth: 41, frameHeight: 44 });

        this.load.spritesheet('archer_attack', 'assets/images/archer/Archer_Attack_Flecha.png',
            { frameWidth: 37, frameHeight: 39 });

        this.load.spritesheet('archer_death', 'assets/images/archer/Archer_Death.png',
            { frameWidth: 45, frameHeight: 39 });

        this.load.spritesheet('archer_front_attack', 'assets/images/archer/Archer_Melee.png',
            { frameWidth: 50, frameHeight: 40 });

        //---------ARROW------------- 
        this.load.spritesheet('arrow', 'assets/images/archer/flecha.png',
            { frameWidth: 21, frameHeight: 6 });


        //---------HEART------------- 
        this.load.image('full', 'assets/images/random/heart_1.png');
        this.load.image('half_full', 'assets/images/random/heart_2.png');
        this.load.image('half_empty', 'assets/images/random/heart_4.png');
        this.load.image('empty', 'assets/images/random/heart_6.png');


        //------------ENEMIGOS--------------
        //---------FLYING_EYE-------------
        this.load.spritesheet('Flight_flying_eye', 'assets/images/enemies/Flight_flying_eye.png',
            { frameWidth: 150, frameHeight: 50 });

        this.load.spritesheet('Attack_flying_eye', 'assets/images/enemies/Attack_flying_eye.png',
            { frameWidth: 150, frameHeight: 50 });

        this.load.spritesheet('Hit_flying_eye', 'assets/images/enemies/Take Hit_flying_eye.png',
            { frameWidth: 150, frameHeight: 50 });

        this.load.spritesheet('Death_flying_eye', 'assets/images/enemies/Death_flying_eye.png',
            { frameWidth: 150, frameHeight: 50 });

        //---------GOBLIN-------------
        this.load.spritesheet('Attack_goblin', 'assets/images/enemies/Goblin_Attack.png',
            { frameWidth: 88, frameHeight: 45});

        this.load.spritesheet('Death_goblin', 'assets/images/enemies/Goblin_Death.png',
            { frameWidth: 50, frameHeight: 39 });

        this.load.spritesheet('Hit_goblin', 'assets/images/enemies/Goblin_Take_Hit.png',
            { frameWidth: 42, frameHeight: 37 });

        this.load.spritesheet('Run_goblin', 'assets/images/enemies/Goblin_Run.png',
            { frameWidth: 35, frameHeight: 38 });


        //---------SKELETON-------------
        this.load.spritesheet('Attack_skeleton', 'assets/images/enemies/Attack_skeleton.png',
            { frameWidth: 150, frameHeight: 60 });

        this.load.spritesheet('Death_skeleton', 'assets/images/enemies/Death_skeleton.png',
            { frameWidth: 150, frameHeight: 60 });

        this.load.spritesheet('Hit_skeleton', 'assets/images/enemies/Take Hit_skeleton.png',
            { frameWidth: 150, frameHeight: 60 });

        this.load.spritesheet('Walk_skeleton', 'assets/images/enemies/Walk_skeleton.png',
            { frameWidth: 150, frameHeight: 60 });

    }


    //------------SPAWNS--------------
    //--------ARCHER--------

    spawnPlayer(scene, x, y, layerground) {
        let archer = new Archer(scene, x, y);
        archer.createAnims(); //crear las animaciones del archer
        return archer;
    }

    //--------ARROW--------
    spawnArrow(scene, x, y, player) {
        let arrow = new Arrow(scene, x, y, player);
        arrow.createAnims();
        return arrow;
    }

    //--------FLYING_EYE--------
    spawnFlying_Eye(scene, x, y, enemies) {
        let flying_eye = new Flying_Eye(scene, x, y);
        flying_eye.createAnims(); //crear las animaciones del enemgo
        flying_eye.setScale(1.5);
        flying_eye.play('flight', true);
        enemies.add(flying_eye);
        return flying_eye;
    }

    //--------GOBLIN--------
    spawnGoblin(scene, x, y, enemies) {
        let goblin = new Goblin(scene, x, y);
        goblin.createAnims(); //crear las animaciones del enemgo
        //goblin.setScale(1.5);
        goblin.play('run', true);
        enemies.add(goblin);
        return goblin;
    }

    //--------SKELETON--------
    spawnSkeleton(scene, x, y, enemies) {
        let skeleton = new Skeleton(scene, x, y);
        skeleton.createAnims(); //crear las animaciones del enemgo
        skeleton.setScale(1.5);
        skeleton.play('walk', true);
        enemies.add(skeleton);
        return skeleton;
    }

    //------------CHECKS VARIOS--------------
    /*overlapcallback(player, enemy) {
        if (player.isAlive() && !player.winGame)
            return true;
        else
            return false;
    }*/
    //--------ATACKS ENEMIGOS--------
    enemyUpdate(scene, enemies, player) {
        enemies.getChildren().forEach(function (item) {
            //Atacar
            if (!item.hurtflag)  //Si no esta herido el enemigo, activo el checkAtack del mismo
                item.checkAttack(player, this, scene);
                
        }, this);
    }

    //--------ATACK ARCHER A ENEMIGOS--------
    checkPlayerAttack(scene, arrow, enemies, game) {
        for (let i = 0; i < arrow.getChildren().length; i++) {
            enemies.getChildren().forEach(function (item) {
                if (!item.hurtflag && scene.physics.overlap(arrow, item)) {//mirar overlap
                    game.stayDelayEnemy(item, arrow); 
                    game.delayEnemy(scene, item); 
                }
            }, scene);
        }
    }


    //--------ARCHER ATACADO?--------
    checkPlayerisAttacked(scene, player, game) {
        if (player.hurtflag) {
            game.hurtPlayer(scene, player); //anyadido hurtPlayer
            game.updateHealthHeart(player); // mirar updateHealthHud
        }
    }

    //------------HURTS--------------
    //-----AL ARCHER--------
    knockBack(player,enemy){
        if ( !enemy.hurtflag && player.isAlive()) {
            player.hurtflag = true;
            if (player.body.touching.down) {
                player.body.setVelocityY(-player.knockBackUP);
            }
            else if (player.body.touching.right) {
                player.body.setVelocityY(-player.knockBackSIDE);
                player.body.setVelocityX(-player.knockBackSIDE);
            }
            else if (player.body.touching.left) {
                player.body.setVelocityY(-player.knockBackSIDE);
                player.body.setVelocityX(player.knockBackSIDE);
            }
            else {
                player.body.setVelocityY(-player.knockBackUP);
            }
          //  player.play('', false);
            player.invincible = true;
        }

    }

    hurtPlayer(scene, player) {
       //Jugador invencible por timpo limitado 
       /*
        scene.time.addEvent({
            delay: player.invincibleCounter,
            callback: () => {
                player.invincible = false;
            },
        });*/
        player.health -= 1; //Le gasto uno en salud
        player.hurtflag = false;
    }

    addHeart(scene) {
        this.heart = scene.add.sprite(this.posHeart, this.posHeart, "full").setOrigin(0).setDepth(2);
        this.heart.setTexture("full");
        this.heart.setScrollFactor(0);
    }

    updateHealthHeart(player) {
        switch (player.health) {
            case 3:
                this.hud.setTexture("full");
                break;
            case 2:
                this.hud.setTexture("half_full");
                break;
            case 1:
                this.hud.setTexture("half_empty");
                break;
            default:
                this.hud.setTexture("empty");
                break;
        }
    }

    //-----A ENEMIGOS-------
    stayDelayEnemy(enemy, arrow) {
        enemy.hurtflag = true;
    }

    delayEnemy(scene,enemy){
        scene.time.addEvent({
            delay: enemy.stayDelayEnemy, //tiempo que el enemigo esta stuneado
            callback: () => {
                enemy.hurtflag = false;
            },
        });
    }



    //------------MAPAS--------------
    //-----MAPA POR NIVELES--------
    addMap(scene, level) {
        let mapa;
        switch (level) {
            case 1: mapa = scene.make.tilemap({
                key: 'mapa1',
                tileWidth: 16,
                tileHeight: 16
            }); break;
        }
        return mapa;
    }

    //--------BACKGROUND--------
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
                this.bg_1 = scene.add.tileSprite(0, 0, 800, 600, "bg1")
                this.bg_1.setOrigin(0, 0);
                this.bg_1.setScrollFactor(0);
                //this.bg_1.setScale(2, 1);
                /*
                    this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg2")
                    this.bg_1.setOrigin(0,0);
                    this.bg_1.setScrollFactor(0);
                    //this.bg_1.setScale(2, 1.26)
    
                    this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg3")
                    this.bg_1.setOrigin(0,0);
                    this.bg_1.setScrollFactor(0);
                    this.bg_1.setScale(2, 1.26)
    
                    this.bg_1 = scene.add.tileSprite(0, 0, 1472, 736, "bg4a")
                    this.bg_1.setOrigin(0,0);
                    this.bg_1.setScrollFactor(0);
                    this.bg_1.setScale(2, 1.26);*/
                break;
        }

        return this.bg_1;

    }

    //--------SUELO--------
    addGround(scene, map) {
        //Añadimos los tileset utilizados 
        // let tileset = map.addTilesetImage('tilemap', 'patronesTiled', this.tileSize, this.tileSize);
        this.tileset1 = map.addTilesetImage('tiles', 'patronesTiled');
        //this.platforms= map.createDynamicLayer('ground', this.tileset1 ); //ground es como se llama en el Tiled
        this.platforms = map.createStaticLayer('ground', this.tileset1, 0, 0);


        this.platforms.setCollisionByExclusion(-1, true); // <- a medias

        //this.platforms.setCollisionBetween(0, 999); <- a medias

        return this.platforms;
    }

    //--------CAMARA--------
    addCamera(scene, player, groundLayer) {
        //camara que sigue al jugador
        scene.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height); //para que no se salga del mapa
        scene.cameras.main.startFollow(player);
        return scene.cameras.main;
    }

    //--------COLISIONES ENEMIGOS--------
    addEnemyPhysics(scene,enemies,groundLayer){
        scene.physics.add.collider(enemies, groundLayer);
        scene.physics.add.collider(enemies, enemies);
        enemies.getChildren().forEach(function (item) {
            item.addPhysics();
        }, scene);

    }


    create() {
        /*
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
        /*
                this.enemies = this.physics.add.group();
                this.flying_eye = this.spawnFlying_Eye(this, 700, 300, this.enemies);
        
                //this.flying_eye.setScale(1.35);
                this.collider = this.physics.add.collider(this.flying_eye, this.platforms);
        
        
        
                //this.physics.collider(this.enemies,this.platforms);
                //this.collider2 = this.physics.add.collider(this.enemies, this.platforms);
                //this.spawnFlying_Eye(this,0,300,this.enemies);
        */


        //------------BOTONES
        //let clickButton = this.add.image(this.game.renderer.width / 2 - this.widthAdded, this.game.renderer.height / 2 + this.heightAdded, "play_button").setDepth(1).setInteractive();
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);
        playButton.setInteractive();
        //Para pasar al nivel1  si pulsa para jugar
        playButton.on("pointerup", () => {
            this.scene.stop(this);
            this.scene.start("Level1");
        });
    }

    update(time, delta) {
        // this.bg_1.tilePositionX = this.archer.x * .3;
        //------------JUGADOR
        //this.archer.update(this);

        //------------ENEMIGOS
        /*this.enemies.getChildren().forEach(function(item) {
        item.preUpdate(time,delta);
        }, this);*/
    }

}