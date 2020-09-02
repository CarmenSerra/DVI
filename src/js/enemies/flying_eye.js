export default class Flying_Eye extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'flying_eye');
         this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
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
            key: 'flight',
            frames: this.scene.anims.generateFrameNumbers('Flight_flying_eye', { start: 0, end: 7 }),
            frameRate: 5,
        });

        this.scene.anims.create({
            key: 'attack',
            frames: this.scene.anims.generateFrameNumbers('Attack_flying_eye', { start: 0, end: 7 }),
            frameRate: 15,
        });
    }

    fly() {
        this.body.setSize(0, 0); //ajustar el collider
        this.play('flight', true);
        //this.setGravityX(30);
        //this.setGravityY(0);
        //this.flipX = true;
        if (this.flipX)
            this.body.setVelocityX(100);
        else
            this.body.setVelocityX(-100);

    }

    preUpdate(t, dt) {

        super.preUpdate(t, dt);     
        this.fly();
        
        

       if (this.body.touching.right || this.body.blocked.right) {
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