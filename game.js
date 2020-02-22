export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  //Aqui se precargan las imagenes para el juego, para que vaya mas rapido.
    this.load.image('background','/possible_background_1.png');
  }

  create() { //Este se ejecuta justo despues del preload.
    this.background = this.game.add.sprite(0,0,'background');
  }

  update(time, delta) {    
  }
}