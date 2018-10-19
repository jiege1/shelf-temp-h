import React from 'react';
import { Carousel } from 'antd';
import css from './index.less';

export default class SliderVertical extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.startClient = {
      x: 0,
      y: 0,
    };
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.sliderRef);
  }

  /**
   * oneOf next prev
   * @param direction
   */
  swipeChange(direction = 'next') {
    const slider = this.sliderRef.current;
    if (slider && slider[direction]) {
      slider[direction]();
    }

  }

  swipeTo(index) {
    const slider = this.sliderRef.current;
    if (slider) {
      slider.goTo(index);
    }
  }

  swipeStart(e) {
    e.stopPropagation();
    const {clientX, clientY} = e.touches[0];
    this.startClient = {x: clientX, y: clientY};

    // 暂停自动播放
    const {autoplay} = this.props;
    if (autoplay) {
      this.sliderRef.current.slick.slickPause();
    }
  }

  swipeEnd(e) {
    e.stopPropagation();
    const {clientX, clientY} = e.changedTouches[0];
    const {x, y} = this.startClient;

    const moveX = clientX - x;
    const moveY = clientY - y;

    if (Math.abs(moveY) > Math.abs(moveX)) {
      this.swipeChange(moveY < 0 ? 'next' : 'prev');
    }

    this.startClient = {x: 0, y: 0};


    // 开启自动播放
    const {autoplay} = this.props;
    if (autoplay) {
      this.sliderRef.current.slick.slickPlay();
    }
  }

  render() {

    const {children, ...others} = this.props;

    const props = {
      className: css.slider,
      ref: this.sliderRef,
      ...others
    };

    return (
      <Carousel {...props}>
        {
          children.map((child, index) => {
            const pageProps = {
              key: `sliderPage_${index}`,
              className: css.content,
              onTouchStart: this.swipeStart.bind(this),
              onTouchEnd: this.swipeEnd.bind(this),
            };
            return (
              <div {...pageProps}>
                {child}
              </div>
            );
          })
        }
      </Carousel>
    );
  }
}