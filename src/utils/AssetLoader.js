export default class AssetLoader {
  static preload(scene) {
    scene.load.atlas(
      'warrior',
      'assets/spritesheets/warrior.png',
      '/warrior.json'
    );
  }
}
