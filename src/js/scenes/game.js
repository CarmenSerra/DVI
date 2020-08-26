import Archer from './../archer.js'
//Los demas aqui tambien

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
        this.tileSize = 64; //No se si son exactamente 64
        //this.tileIndez = 6;
    }

    preload() { //Es para todo el juego, aqui se van a cargar todos los recursos

        //---------------MAPAS------------------


        //Tiles
        //this.load.image('tiles', 'assets/images/background/tiles.png');
        this.load.image('ground', 'assets/images/background/tiles.png');
        //JSON
        //this.load.tilemapTiledJSON('mapa1','assets/images/background/level1.json'); //Nivel 1
        this.load.tilemapTiledJSON('tilemap', 'assets/images/background/level1.json');
        //Background
        this.load.image('bg', 'assets/images/background/Ejemplo_mapa.png');

        //---------------SPRITESHEETS------------------
        //---------PROTAGONISTA--------------
        this.load.spritesheet('archer', 'assets/images/archer/spr_ArcherIdle_strip_NoBkg.png',
            { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('archer_run', 'assets/images/archer/spr_ArcherRun_strip_NoBkg.png',
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
                key: 'mapa1',
                tileWidth: 16,
                tileHeight: 16
            }); break;
        }
        return mapa;
    }


    //-------BACKGROUND 
    addBackground(scene, level) {
        let back_ground;
        switch (level) {
            case 1: back_ground = scene.add.image(0, -550, "bg").setOrigin(0).setDepth(-1).setInteractive(); break;
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
        let tileset = map.addTilesetImage('tilemap', 'tiles', this.tileSize, this.tileSize);
        let layerground = map.createDynamicLayer('ground', tileset); //ground es como se llama en el Tiled

        layerground.setCollisionFromCollisionGroup();
        //Bounds del mundo
        scene.physics.world.bounds.width = layerground.width;
        scene.physics.world.bounds.height = layerground.height;

        return layerground;
    }

    //-------CAMARA
    addCamera(scene, player, groundLayer) {
        //camara que sigue al jugador
        scene.cameras.main.setBounds(0, 0, groundLayer.width, groundLayer.height); //para que no se salga del mapa
        scene.cameras.main.startFollow(player);
    }


    create() {
        //this.add.image(400, 300, 'back_ejemplo');
        //this.archer = this.spawnPlayer(this, 0, 919, this.groundLayer);
        //Cargo game, tiene las funciones que necesito para construir el nivel
        //this.game = this.scene.get('Game');


        //------------MAPA
        this.map = this.make.tilemap({
            key: 'tilemap',
            tileWidth: 16,
            tileHeight: 16
        });
        const tileset1 = this.map.addTilesetImage('patrones', 'ground');
        // this.map = this.addMap(this, 1);
        // this.background = this.addBackground(this, 1);
        //this.layerground = this.addGround(this, this.map);


        //------------JUGADOR
        this.archer = this.spawnPlayer(this, 0, 800, this.layerground);
        this.collider = this.physics.add.collider(this.archer, this.layerground);

        //------------CAMARA
        //this.addCamera(this, this.archer, this.layerground);
    }

    update(time, delta) {
        this.archer.update(this);
    }

}