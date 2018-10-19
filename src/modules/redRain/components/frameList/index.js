import * as PIXI from 'pixi.js';

export default class FrameList {
  constructor({list, loop = true, ...other}) {
    let textures = list.map(item => {
      return new PIXI.Texture.fromFrame(item);
    });

    this.animatedSprite = new PIXI.extras.AnimatedSprite(textures);
    const { top = 0, left = 0, speed = 1, rotate = 0, onCompleteCutNice, onComplete, width, height } = other;
    this.animatedSprite.x = left;
    this.animatedSprite.y = top;
    this.animatedSprite.loop = loop; // true 只播放一次
    this.animatedSprite.rotation = rotate;
    if (width) this.animatedSprite.width = width;
    if (height) this.animatedSprite.height = height;

    this.animatedSprite.play();
    this.animatedSprite.animationSpeed = speed; // 播放速度

    this.animatedSprite.onComplete = () => {
      onComplete();
      onCompleteCutNice();
    };

    return this.animatedSprite;
  }
}
