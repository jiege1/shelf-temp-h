import React from 'react';
import TweenOne from 'rc-tween-one';

const rd = (x = 10) => {
  return Math.random() * x;
};

const getTop = (maxHeight, i) => {
  // let percents = [];
  // for (let i = 0; i < 10; i++) {
  //   percents.push(i * 10);
  // }
  console.log(maxHeight);
  return (i / 10) * maxHeight;
  // console.log(maxHeight);
  // let topArr = [];
  // for (let i = 0; i <= maxHeight; i++) {
  //   if (!(i % 42)) topArr.push(i);
  // }
  // console.log(topArr[parseInt(Math.random() * topArr.length)])
  // return topArr[parseInt(Math.random() * topArr.length)];
};

const minRd = (min = 5000, x = 10000) => {
  let r = rd(x);
  if (r < min) {
    r = minRd(min, x);
  }
  return r;
};
class Text extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { html, left, maxTop, duration, length, i } = this.props;
    const maxDura = Math.max(...duration);
    const minDura = Math.min(...duration);
    const props = {
      style: {
        color: '#fff',
        position: 'absolute',
        top: getTop(maxTop, i),
        left: left,
        display: 'inline-block',
        whiteSpace: 'nowrap',
      },
      animation: {
        delay: rd(minDura),
        duration: minRd(minDura, maxDura),
        left: -length,
        ease: 'linear',
        repeat: -1,
        repeatDelay: rd(5000),
      },
      component: 'span',
      dangerouslySetInnerHTML: {
        __html: html,
      },
    };

    return (
      <TweenOne {...props} />
    );
  }
}
export default Text;
