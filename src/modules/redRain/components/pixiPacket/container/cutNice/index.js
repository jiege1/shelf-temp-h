import * as PIXI from 'pixi.js';
import nice from 'assets/images/redRainImages/nice.png';

export default class CutNice {
  constructor(props) {
    this.props = props;
    this.niceImg();
    this.enlargeNice = 0.2;
    this.timer = setInterval(() => {
      if (this.enlargeNice >= 1) {
        clearInterval(this.timer);
      }
      this.enlargeNice = this.enlargeNice + 0.01;
    }, 10);
  }

  niceImg() {
    const {top, left} = this.props;
    this.cutNiceImg = PIXI.Sprite.fromImage(nice);
    this.cutNiceImg.x = left;
    this.cutNiceImg.y = top;
    // this.cutNiceImg.scale.x = this.enlargeNice;
    // this.cutNiceImg.scale.y = this.enlargeNice;
  }
}