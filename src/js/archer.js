export default class Archer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'archer');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.Akey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); //Para atacar en corto 
        this.Spacekey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); // Para atacar con flecha 

    }

    createAnims() {

        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNumbers('archer_run', { start: 0, end: 7 }),
            frameRate: 25,
          });

          this.scene.anims.create({
            key: 'jump',
            frames: this.scene.anims.generateFrameNumbers('archer_jump', { start: 0, end: 11 }),
            frameRate: 15,
          });

          this.scene.anims.create({
            key: 'dash',
            frames: this.scene.anims.generateFrameNumbers('archer_dash', { start: 0, end: 13 }),
            frameRate: 15,
          });

          this.scene.anims.create({
            key: 'attack',
            frames: this.scene.anims.generateFrameNumbers('archer_attack', { start: 0, end: 13 }),
            frameRate: 15,
          });

          this.scene.anims.create({
            key: 'stan',
            frames: this.scene.anims.generateFrameNumbers('archer', { start: 0, end: 7 }),
            frameRate: 13,
          });


          this.scene.anims.create({
            key: 'front_attack',
            frames: this.scene.anims.generateFrameNumbers('archer_front_attack', { start: 0, end: 23 }),
            frameRate: 13,
          });

    }

    preUpdate(t,d) {
        super.preUpdate(t,d);
       
         if (this.cursors.right.isDown) {
            this.body.setVelocityX(300);
            this.play('run', true);
        }
        else if (this.cursors.left.isDown) {
            this.body.setVelocityX(-300);
            this.play('run', true);
        } //saltar 
        else if (this.cursors.up.isDown) {
            this.body.setVelocityY(-220);
            this.play('jump', true);
        } //rodar, hacer la voltereta, dash
        else if (this.cursors.down.isDown) {
            this.body.setVelocityX(300);
            this.play('dash', true);
        }//atacar con la flecha
        else if (this.Spacekey.isDown) {
            this.body.setVelocityX(200);
            console.log('pp');
            this.play('attack', true);
        }//atacar en corto
        else if (this.Akey.isDown) {
            this.body.setVelocityX(200);
            this.play('front_attack', true);
        }
        else if (this.cursors.left.isUp  && this.cursors.right.isUp &&  this.cursors.up.isUp && this.cursors.down.isUp && this.Spacekey.isUp  && this.Akey.isUp) {
            this.body.setVelocityX(0);
            this.play('stan', true);
        }
        
       
           
    
        if (this.body.velocity.x < 0)
            this.setFlipX(true); //derecha
        else if (this.body.velocity.x > 0)
            this.setFlipX(false); //izquierda
    }




}