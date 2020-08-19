export default class Archer extends Phaser.GameObjects.Sprite{
constructor(scene,x,y){
    super(scene,x,y,'archer');
    this.scene.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.cursors = this.scene.input.keyboard.createCursorKeys();

}

createAnims() {
    this.scene.anims.create({
    key: 'stanarcher',
    frames: this.scene.anims.generateFrames('archer',{
        prefix: 'spr_ArcherIdle_strip_NoBkg',
        sufix: '.png',
        start: 0,
        end: 7,
        zeroPad: 2
    }),
    frameRate : 10,
    repeat: -1
    });


}

update(game){

    //izquierda

    if(this.cursors.left.isDown){
        this.body.setVelociyX(-300);
        this.anims.play('stanarcher',true);
    }
    else if(this.cursors.right.isDown){
        this.body.setVelociyX(300);
        this.anims.play('right',true);
    }
}




}