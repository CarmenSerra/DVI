export default class Level1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level1' });
        this.level = 1;
        this.tileSize = 64;
    }


    preload() {

    }

    create() {
        //Cargo game, tiene las funciones que necesito para construir el nivel
        this.game = this.scene.get('Game');


        //------------MAPA
        this.map = this.game.addMap(this, this.level);
        this.background = this.game.addBackGround(this, this.level);
        this.layerground = this.game.addGround(this, this.map);




        //------------JUGADOR
        this.archer = this.game.spawnPlayer(this, 0, 919, this.layerground);
        this.collider = this.physics.add.collider(this.archer, this.layerground);

        //------------CAMARA
        this.game.addCamera(this, this.archer, this.layerground);

    }



    update(time, delta) {
        this.archer.update(this.game);
    }




}