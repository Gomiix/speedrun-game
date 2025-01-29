import AssetLoader from '../utils/AssetLoader.js';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    AssetLoader.preload(this);
  }

  create() {
    this.scene.start('GameScene');
  }
}
