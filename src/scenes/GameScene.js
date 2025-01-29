import GameController from '../controllers/GameController.js';
import PlayerController from '../controllers/PlayerController.js';
import PlayerAnimations from '../animations/PlayerAnimations.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    const player = this.physics.add.sprite(100, 450, 'warrior');
    player.setCollideWorldBounds(true);

    PlayerAnimations.create(this);
    this.gameController = new GameController(this);
    this.playerController = new PlayerController(
      this,
      player,
      this.gameController
    );
  }

  update() {
    this.playerController.update();
  }
}
