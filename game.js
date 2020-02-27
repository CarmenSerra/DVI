export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  //Aqui se precargan las imagenes para el juego, para que vaya mas rapido.
    this.load.image('background','assets/images/possible_background_1.png');
  }

  create() { //Este se ejecuta justo despues del preload.
   this.add.image(400,300,'background');
  }

  update(time, delta) {    
  }
}