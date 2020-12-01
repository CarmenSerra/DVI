export default class Level1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level1' });
        this.level = 1;
        this.tileSize = 16;
    }


    preload() {

    }

    create() {
        //Cargo game, tiene las funciones que necesito para construir el nivel
        this.game = this.scene.get('Game');


        //------------MAPA
        this.level = 1;
        this.map = this.game.addMap(this, this.level);
        this.background = this.game.addBackGround(this, this.level);
        this.platforms = this.game.addGround(this, this.map);
        //this.platforms.setScale(2); //Comprobar si quitando choca en mismo lado
        



        //------------JUGADOR
        //----HEARTS
        this.game.addHeart(this);
        this.archer = this.game.spawnPlayer(this, 0, 200, this.platforms);
        this.archer.setScale(1.35);
        this.collider = this.physics.add.collider(this.archer, this.platforms);
       
        //----ARROWS
        this.arrow = this.add.group();

        //------------ENEMIGOS
        this.enemies = this.physics.add.group();

        // this.flying_eye = this.game.spawnFlying_Eye(this, 700, 300, this.enemies);
        
        this.game.spawnGoblin(this, 100, 200, this.enemies);

        //this.flying_eye.setScale(1.35);
        //this.collider = this.physics.add.collider(this.flying_eye, this.platforms);
        this.game.addEnemyPhysics(this, this.enemies, this.platforms);

        //-------SPAWNS ENEMIGOS
        /*this.game.spawnFlying_Eye(this,100,100,this.enemies);
        this.game.spawnGoblin(this,200,100,this.enemies);
        this.game.spawnSkeleton(this,300,100,this.enemies);*/

        //------------PROYECTILES
        this.projectiles = this.add.group();


        //------------OVERLAPS
        this.physics.add.overlap(this.archer, this.enemies, this.game.knockBack, this.game.overlapcallback, this);
		this.physics.add.overlap(this.enemies, this.arrow, this.game.stayDelayEnemy, null, this);



        //------------CAMARA
        this.mycam = this.game.addCamera(this, this.archer, this.platforms);


    }



    update(time, delta) {
        this.background.tilePositionX = this.archer.x * .3;

       //Jugador?
       //Enemigos comprueban si pueden atacar al jugador
       this.game.enemyUpdate(this,this.enemies,this.archer);

       //Jugador comprueba si puede atacar
       this.game.checkPlayerAttack(this, this.arrow, this.enemies, this.game);
       //Compruebo si el jugador ha sido atacado
       this.game.checkPlayerisAttacked(this, this.archer, this.game);




    }




}