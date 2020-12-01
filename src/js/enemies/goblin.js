export default class Goblin extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'goblin');
        this.hurtflag = false;
        this.stayDelayEnemy = 2000;
        this.velocity = 100;
        this.isAttacking = false;
        // this.scene.setBounce(0.1);
    }

    addPhysics() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
    }
    createAnims() {


        this.scene.anims.create({
            key: 'attack',
            frames: this.scene.anims.generateFrameNumbers('Attack_goblin', { start: 0, end: 7 }),
            frameRate: 5,
        });

        this.scene.anims.create({
            key: 'death',
            frames: this.scene.anims.generateFrameNumbers('Death_goblin', { start: 0, end: 3 }),
            frameRate: 15,
        });

        this.scene.anims.create({
            key: 'hit',
            frames: this.scene.anims.generateFrameNumbers('Hit_goblin', { start: 0, end: 3 }),
            frameRate: 15,
        });

        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNumbers('Run_goblin', { start: 0, end: 7 }),
            frameRate: 15,
        });
    }

    walk() {
        this.body.setSize(0, 38); //ajustar el collider
        this.play('run', true);
        if (this.flipX)
            this.body.setVelocityX(this.vel);
        else
            this.body.setVelocityX(-this.vel);
    }


    //Comprobar si el jugador esta en rango
    playerInRange(archer) {
        return Math.abs(this.x - archer.x) <= 600 && (this.y - archer.y - 16 < 2 && this.y - archer.y - 16 > -2);
    }
    //Lo necesito en todos los enemigos
    checkAttack(archer, game) {
        if (archer.isAlive() && this.playerInRange(archer) && (this.x > archer.x && !this.flipX || this.x < archer.x && this.flipX)) { //jugador en rango y goblin mirandolo

            this.body.setVelocityX(0);
            this.isAttacking = true;
            this.play('attack', true);
            //Tengo  que poner la espada como un proyectil?

        }
        if (this.anims.currentFrame.index === 5 && this.isAttacking) {
            this.isAttacking = false;
            this.walk();
        }
    }



    preUpdate(t, dt) {

        super.preUpdate(t, dt);
        //si no estoy herido y no estoy atacando entonces ando
        if (!this.hurtflag && this.anims.currentAnim.key != 'attack') {
            this.walk();
        }


        if (this.body.touching.right || this.body.blocked.right) {
            this.body.setVelocityX(-this.velocity); // turn left
        }
        else if (this.body.touching.left || this.body.blocked.left) {
            this.body.setVelocityX(this.velocity); // turn right
        }


        if (this.hurtflag) { //Si estoy herido, hit
            this.body.setSize(0, 45);
            this.play('hit');
            this.body.setVelocityX(0);
        }

        if (this.isAttacking) {
            this.body.setSize(0, 50);
        }


        if (this.body.velocity.x < 0)
            this.setFlipX(true); //derecha
        else if (this.body.velocity.x > 0)
            this.setFlipX(false); //izquierda

    }





}