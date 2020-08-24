import Archer from './../archer.js'
//Los demas aqui tambien

export default class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'Game' });
        //this.tileSize = 64 
        //this.tileIndez = 6;
    }

    preload() { //Es para todo el juego, aqui se van a cargar todos los recursos

        //---------------MAPAS------------------
        this.load.image('back_ejemplo', 'assets/images/background/Ejemplo_mapa.png')


        //---------------SPRITESHEETS------------------
        //---------PROTAGONISTA--------------
        this.load.spritesheet('archer', 'assets/images/archer/spr_ArcherIdle_strip_NoBkg.png',
            { frameWidth: 32, frameHeight: 48 });

        //---------ENEMIGOS--------------


    }

    create() {
        this.add.image(400, 300, 'back_ejemplo');
        this.archer = this.spawnPlayer(this,0,919,this.groundLayer);
    }

    spawnPlayer(scene, x, y, groundLayer) {
        let archer = new Archer(scene, x, y);
        archer.createAnims(); //crear las animaciones del archer
        return archer;
    }
   

}