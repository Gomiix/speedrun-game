export default class PlayerAnimations {
  static create(scene) {
    scene.anims.create({
      key: 'idle',
      frames: scene.anims.generateFrameNames('warrior', {
        prefix: 'Warrior_Idle_',
        start: 1,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: 'run',
      frames: scene.anims.generateFrameNames('warrior', {
        prefix: 'Warrior_Run_',
        start: 1,
        end: 8,
      }),
      frameRate: 12,
      repeat: -1,
    });
  }
}
