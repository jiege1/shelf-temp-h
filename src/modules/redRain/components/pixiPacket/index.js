import * as PIXI from 'pixi.js';
import {PACKETS, redRainConst} from 'common/const/redRain';
import OneContainer from './container';


export default class PixiPacket {

  constructor(props) {
    this.width = redRainConst.type === 'vertical' ? 1080 : 1920;
    this.height = redRainConst.type === 'vertical' ? 1920 : 1080;

    this.app = new PIXI.Application({
      width: this.width || 1080,
      height: this.height || 1920,
      transparent: true,
      antialias: true,
      resolution: 1,
    });
    this.setup();
  }

  setup = () => {
    this.redPackets = PACKETS.map((item, index) => {
      this.redPacket = new OneContainer({
        index: index,
        item: item,
        App: this.app,
        onComplete: () => {
          // console.log(this.redPacket)
          this.app.stage.removeChild(this.redPacket.packetsContainer);
        },
        boxWidth: this.width,
        boxHeight: this.height,
      }); // 每个小红包
      this.app.stage.addChild(this.redPacket.packetsContainer); // 把每个红包容器放到舞台里面去
      return this.redPacket;
    });
  };

  // countDown = (props) => {
  //   props.onComplete();
  //   this.redPackets.forEach(item => { // 清除红包
  //     this.app.stage.removeChild(item.packetsContainer);
  //   });
  // }

} ;
