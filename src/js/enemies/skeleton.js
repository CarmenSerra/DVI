export default class Skeleton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'goblin');
        this.hurtflag = false;
        this.stayDelayEnemy = 2000;
        // this.scene.setBounce(0.1);
    }

    addPhysics() {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        //this.body.setVelocityX(15);
    }
    createAnims() {

    
        this.scene.anims.create({
            key: 'attack',
            frames: this.scene.anims.generateFrameNumbers('Attack_skeleton', { start: 0, end: 7 }),
            frameRate: 5,
        });

        this.scene.anims.create({
            key: 'death',
            frames: this.scene.anims.generateFrameNumbers('Death_skeleton', { start: 0, end: 3 }),
            frameRate: 15,
        });

        this.scene.anims.create({
            key: 'hit',
            frames: this.scene.anims.generateFrameNumbers('Hit_skeleton', { start: 0, end: 3 }),
            frameRate: 15,
        });

        this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNumbers('Walk_skeleton', { start: 0, end: 3 }),
            frameRate: 15,
        });
    }

    /*checkAttack(wolf, game) {
		if (wolf.isAlive() && this.playerInRange(wolf) && (this.x > wolf.x && !this.flipX || this.x < wolf.x && this.flipX)) { //jugador en rango y dragon mirandolo
			if (this.coolDown > this.maxcoolDown) {
				this.body.setVelocityX(0);
				this.isAttacking = true;
				this.play('attackicedrake', true);
				let beam;
				if (this.flipX)
					beam = game.spawnBeam(this.scene, this.x + this.distSpawnBeam, this.y, this);
				else
					beam = game.spawnBeam(this.scene, this.x - this.distSpawnBeam, this.y, this);
				beam.play('beamAnim', true);
				game.audio_dragonbreath();
				this.coolDown = 0;
			}
		}
		if (this.anims.currentFrame.index === 5 && this.isAttacking) {
			this.isAttacking = false;
			this.walk();
		}
		this.coolDown++;
	}*/

    preUpdate(t, dt) {

        super.preUpdate(t, dt);     
        //this.fly();
        
        

      /* if (this.body.touching.right || this.body.blocked.right) {
            this.body.setVelocityX(-100); // turn left
        }
        else if (this.body.touching.left || this.body.blocked.left) {
            this.body.setVelocityX(100); // turn right
        }
        

        /*if (this.body.velocity.x < 0)
            this.setFlipX(true); //derecha
        else if (this.body.velocity.x > 0)
            this.setFlipX(false); //izquierda*/

    }





}