
import * as PIXI from 'pixi.js';
import FrameList from '../../frameList';
import {FRAMES1, FRAMES2} from 'common/const/redRain';
import CutNice from './cutNice';

export default class OneContainer {

  constructor(props) {
    this.props = props;
    this.redPacket();
  };

  redPacket() {
    const offsetY = Math.random() < 0.5 ? Math.random() * 800 : -(Math.random() * 800); // 红包雨y轴上下
    const {item: {width, height, isClick, url, type}, App, boxWidth, boxHeight, onComplete = () => {}, index} = this.props;
    // console.log(App);
    this.packetsContainer = new PIXI.Container();
    this.packetsImg = new PIXI.Sprite.fromImage(url);
    this.packetsImg.width = width;
    this.packetsImg.height = height;
    this.packetsImg.rotation = isClick ? 5.5 : 0; // 金币旋转角度随机
    this.packetsImg.x = this.randomPos('x', -30, 5) - 500;
    // console.log('x', this.randomPos('x', -30, 5) - 500);
    this.packetsImg.y = (this.packetsImg.x * boxHeight / boxWidth) - offsetY;
    this.packetsImg.interactive = true;
    this.packetsContainer.addChild(this.packetsImg);
    App.ticker.add(() => { // 控制红包速度
      this.redPacketMove();
    });
    this.packetsImg.on('pointerdown', () => {
      if (isClick) { // 是否可点击
        this.pixiFrame(type); // 添加序列帧
        // console.log(this.packetsImg.x, this.packetsImg.y);
        this.newCutNice();
        this.packetsContainer.removeChild(this.packetsImg);
      }
    });
  }

  pixiFrame(type) {
    let list;
    if (type === 1) { // 根据type分析是哪个类型的红包
      list = FRAMES1;
    }
    if (type === 2) {
      list = FRAMES2;
    }

    const frameList = new FrameList({
      list: list.map(item => item.url),
      loop: false,
      width: this.packetsContainer.children[0].width,
      height: this.packetsContainer.children[0].height,
      left: this.packetsContainer.children[0].x,
      top: this.packetsContainer.children[0].y,
      rotate: 5.5,
      speed: 0.2,
      onCompleteCutNice: () => this.props.App.stage.removeChild(this.nice.cutNiceImg), // 清除切得漂亮
      // onStop: this.props.onTransitionEnd,
      // onComplete: () => this.completePlay(ind),
      onComplete: () => this.packetsContainer.removeChild(frameList), // 清除序列帧

    });
    frameList.interactive = true; // 设置为true 否则不触发触摸，指针和鼠标事件
    frameList.on('pointerdown', () => {
      // console.log('点我没效果哦');
    });

    this.packetsContainer.addChild(frameList);

  };

  newCutNice() {
    const {App} = this.props;
    this.nice = new CutNice({
      top: this.packetsImg.y,
      left: this.packetsImg.x,
      App: App,
    });
    App.stage.addChild(this.nice.cutNiceImg);
  };

  redPacketMove() {
    const {item: {type, width}, boxWidth, boxHeight} = this.props;
    if (type === 0) { // 金币
      this.packetsImg.x += boxWidth / 10 * 2 / width;
      this.packetsImg.y += boxHeight / 10 * 2 / width;
    } else {
      this.packetsImg.x += boxWidth / 10 * 4.5 / width;
      this.packetsImg.y += boxHeight / 10 * 4.5 / width;
    }
    if (this.packetsImg.x > boxWidth || this.packetsImg.y > boxHeight) {
      this.packetsContainer.removeChild(this.packetsImg);
    }
  }

  randomPos(xy, min, max) {
    if (xy === 'x') return (Math.random() * (max - min) + min) * 108 * 1.4;
    if (xy === 'y') return (Math.random() * (max - min) + min) * 192 * 1.4;
    if (xy === '') return Math.random() * (max - min) + min;
  };

}
