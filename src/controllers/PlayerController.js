export default class PlayerController {
  constructor(scene, player, gameController) {
    this.scene = scene;
    this.player = player;
    this.gameController = gameController;
  }

  update() {
    const input = this.gameController.getInput();

    if (input.left) {
      this.player.setVelocityX(-160);
      this.player.flipX = true;
      this.player.play('run', true);
    } else if (input.right) {
      this.player.setVelocityX(160);
      this.player.flipX = false;
      this.player.play('run', true);
    } else {
      this.player.setVelocityX(0);
      this.player.play('idle', true);
    }

    if (input.jump && this.player.body.blocked.down) {
      this.player.setVelocityY(-330);
    }
  }
}
