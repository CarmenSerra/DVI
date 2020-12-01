export default class Archer extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'archer');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.Akey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); //Para atacar en corto 
        this.Spacekey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); // Para atacar con flecha 
        this.velocity = 300;
        this.health = 1;
        this.arrowHeight = 6
        this.arrowWidth = 21
        this.hurtflag = false;
        this.knockBackUP =300;
        this.knockBackSIDE = 200;
    }

    createAnims() {

        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNumbers('archer_run', { start: 0, end: 7 }),
            frameRate: 15,
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
            frameRate: 12,
          });


          this.scene.anims.create({
            key: 'front_attack',
            frames: this.scene.anims.generateFrameNumbers('archer_front_attack', { start: 0, end: 23 }),
            frameRate: 13,
          });

    }

    isAlive(){
        return this.health > 0;
    }

    preUpdate(t,d) {
        super.preUpdate(t,d);
         if (this.cursors.right.isDown) {  
            this.body.setVelocityX(this.velocity);
            this.play('run', true);
        }
        else if (this.cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity);
            this.play('run', true);
        } //saltar 
        else if (this.cursors.up.isDown) {
            this.body.setVelocityY(-this.velocity);
            this.play('jump', true);
        } //rodar, hacer la voltereta, dash
        else if (this.cursors.down.isDown) {
            this.body.setVelocityX(this.velocity);
            this.play('dash', true);
        }//atacar con la flecha
        else if (this.Spacekey.isDown) {
            this.body.setVelocityX(this.velocity);
            this.play('attack', true);
        }//atacar en corto
        else if (this.Akey.isDown) {
            this.body.setVelocityX(this.velocity);
            this.play('front_attack', true);
        }
        else if (this.cursors.left.isUp  && this.cursors.right.isUp &&  this.cursors.up.isUp && this.cursors.down.isUp && this.Spacekey.isUp  && this.Akey.isUp) {
            this.body.setVelocityX(0);
            this.play('stan', true);
        }


        //Atacar
        if(Phaser.Input.Keyboard.JustDown(this.Spacekey) && this.body.onFloor() && this.isAlive() /*&& !this.winGame*/ &&( this.anims.currentAnim.key ==='archer_run' || this.anims.currentAnim.key ==='stan')){
            this.body.setVelocityX(0);
            this.play('attack',false);
            let arrow;
            if(this.flipX){
                arrow = game.spawnArrow(this.scene, this.x + this.arrowWidth, this.y + this.arrowHeight, this);
            }else{
                arrow = game.spawnArrow(this.scene, this.x - this.arrowWidth, this.y - this.arrowHeight, this);
            }

            arrow.play('arrowAnim',true);
            //audio

        }
        

        if (this.body.velocity.x < 0)
            this.setFlipX(true); //derecha
        else if (this.body.velocity.x > 0)
            this.setFlipX(false); //izquierda


           
    }




}