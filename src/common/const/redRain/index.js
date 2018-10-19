/**
 * Created by Administrator on 2018/6/6.
 */
import bi from 'assets/images/redRainImages/otherImgs/bi.png';
import one1 from 'assets/images/redRainImages/xulie1/1.png';
import one2 from 'assets/images/redRainImages/xulie1/2.png';
import one3 from 'assets/images/redRainImages/xulie1/3.png';
import one4 from 'assets/images/redRainImages/xulie1/4.png';

import two1 from 'assets/images/redRainImages/xulie2/11.png';
import two2 from 'assets/images/redRainImages/xulie2/22.png';
import two3 from 'assets/images/redRainImages/xulie2/33.png';
import two4 from 'assets/images/redRainImages/xulie2/44.png';
//

import startContent from 'assets/images/redRainImages/startContent.png';
import redRainBut from 'assets/images/redRainImages/redRain.png';
import prize from 'assets/images/redRainImages/prize.png';
import close from 'assets/images/redRainImages/close.png';

// const bi = 'http://localhost:8008/images/redRainImages/otherImgs/bi.png';
// const one1 = 'http://localhost:8008/images/redRainImages/xulie1/1.png';
// const one2 = 'http://localhost:8008/images/redRainImages/xulie1/2.png';
// const one3 = 'http://localhost:8008/images/redRainImages/xulie1/3.png';
// const one4 = 'http://localhost:8008/images/redRainImages/xulie1/4.png';
//
// const two1 = 'http://localhost:8008/images/redRainImages/xulie2/11.png';
// const two2 = 'http://localhost:8008/images/redRainImages/xulie2/22.png';
// const two3 = 'http://localhost:8008/images/redRainImages/xulie2/33.png';
// const two4 = 'http://localhost:8008/images/redRainImages/xulie2/44.png';
//
// const startContent = 'http://localhost:8008/images/redRainImages/startContent.png';
// const redRainBut = 'http://localhost:8008/images/redRainImages/redRain.png';
// const prize = 'http://localhost:8008/images/redRainImages/prize.png';
// const close = 'http://localhost:8008/images/redRainImages/close.png';



export const redRainConst = {
  gameTime: 5,
  type: 'vertical', // vertical level
  startContent: startContent,
  redRainBut: redRainBut,
  prize: prize,
  close: close
};

export const FRAMES1 = [
  {
    url: one1,
  },
  {
    url: one2,
  },
  {
    url: one3,
  },
  {
    url: one4,
  },

];

export const FRAMES2 = [
  {
    url: two1,
  },
  {
    url: two2,
  },
  {
    url: two3,
  },
  {
    url: two4,
  },

];

export const PACKETS = [
  // 不可点击的金币
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 248,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },

  // 第一种红包
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },

  // 复制一下可点击红包
  // 第一种红包
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  //  复制金币
  {
    url: bi,
    width: 162, // 1.2
    height: 248,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },

  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  //  复制金币
  {
    url: bi,
    width: 162, // 1.2
    height: 248,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },

  // 不可点击的金币
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },

  // 复制一下可点击红包
  // 第一种红包
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },

  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 400, // 0.8
    height: 571,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },

  // 不可点击的金币
  {
    url: bi,
    width: 162, // 1.2
    height: 248,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 135,
    height: 146,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 162, // 1.2
    height: 175,
    isClick: false,
    type: 0,
  },
  {
    url: bi,
    width: 108, // 0.8
    height: 116,
    isClick: false,
    type: 0,
  },

  //  复制第二遍

  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 1,
  },
  {
    url: one1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 1,
  },
  // 第二种红包
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 350, // 0.7
    height: 500,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 300, // 0.6
    height: 428,
    isClick: true,
    type: 2,
  },
  {
    url: two1,
    width: 250, // 0.5
    height: 357,
    isClick: true,
    type: 2,
  },
];
