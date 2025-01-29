export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    this.add.text(100, 100, 'Menú Principal', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.input.on('pointerdown', () => this.scene.start('GameScene'));
  }
}
