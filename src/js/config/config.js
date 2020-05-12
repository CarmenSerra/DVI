export default {
  type: Phaser.AUTO,
  parent: 'Meatballypse-game',
  width: 1600,
  height: 750,
  pixelArt: true,
  input: {
      gamepad: true
  },
  scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: { default: 'arcade', arcade: { gravity: { y: 0 }, debug: true } }
  //Aquí va lo de arcade, physics??
};
