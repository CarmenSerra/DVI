export default class Arrow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, player) {
        super(scene, x, y, "arrow");
        this.scene.add.existing(this);
        this.w = 21;
        this.h = 6;

        this.scene.physics.add.existing(this); //enable body
        if (player.flipX) {
            this.setFlipX(false);
        }
        else {
            this.setFlipX(true);
        }
        this.body.allowGravity = false;
        scene.arrow.add(this);
    }



    createAnims() {
        this.scene.anims.create({
            key: 'arrowAnim',
            frames: this.scene.anims.generateFrameNumbers('arrow', { start: 0, end: 4 }),
            frameRate: 15,
          });
    }


    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        this.body.setSize(this.w, this.h);
        if (this.anims.currentFrame.index === 6) {
            this.destroy();
        }
    }

}