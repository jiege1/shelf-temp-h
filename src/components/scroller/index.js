import React from 'react';
import PropTypes from 'prop-types';
import ScrollArea from 'components/scrollArea';
import requestAnimationFrame, {cancelAnimationFrame} from 'common/utils/requestAnimationFrame';

export default class Scroller extends React.Component {

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    autoScroll: PropTypes.bool,
    autoScrollAgainTime: PropTypes.number,
    speed: PropTypes.number,
    direction: PropTypes.oneOf(['vertical', 'horizontal']),
    contentStyle: PropTypes.object,
  };

  static defaultProps = {
    width: 1080,
    height: 1920,
    autoScroll: false,
    autoScrollAgainTime: 10,
    speed: 1,
    direction: 'vertical',
    contentStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.isBack = false;
    this.scrollAreaRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.autoScroll) {
      this.autoScroll();
    }
  }

  componentWillUnmount() {
    if (this.autoScrollTimer) {
      cancelAnimationFrame(this.autoScrollTimer);
    }
  }

  autoScroll() {
    if (this.autoScrollTimer) {
      cancelAnimationFrame(this.autoScrollTimer);
    }
    const {speed} = this.props;
    const scrollAreaInstance = this.scrollAreaRef.current;
    this.autoScrollTimer = requestAnimationFrame(() => {
      const isVertical = this.props.direction === 'vertical';

      const {topPosition, leftPosition} = this.scrollAreaRef.current.state;
      const lastPosition = isVertical ? topPosition : leftPosition;
      const nextPosition = this.isBack ? lastPosition - speed : lastPosition + speed;

      this.scrollTo(nextPosition);

      if (nextPosition <= 0) {
        this.isBack = false;
      }

      const {content, wrapper} = scrollAreaInstance;
      const wrapperLength = isVertical ? wrapper.offsetHeight : wrapper.offsetWidth;
      const contentLength = isVertical ? content.offsetHeight : content.offsetWidth;
      if (wrapperLength + nextPosition >= contentLength) {
        this.isBack = true;
      }

      this.autoScroll();
    });
  }

  scrollTo(position) {
    const scrollAreaInstance = this.scrollAreaRef.current;
    if (this.props.direction === 'vertical') {
      scrollAreaInstance.scrollYTo(position);
    } else {
      scrollAreaInstance.scrollXTo(position);
    }
  }

  render() {
    const {children, height, width, autoScrollAgainTime, autoScroll, contentStyle} = this.props;
    const isVertical = this.props.direction === 'vertical';
    const props = {
      ref: this.scrollAreaRef,
      vertical: isVertical,
      horizontal: !isVertical,
      style: {width, height},
      contentStyle,
    };
    const contentProps = {
      onTouchStart: () => {
        if (this.autoScrollTimer) {
          cancelAnimationFrame(this.autoScrollTimer);
        }
      },
      onTouchEnd: () => {
        if (autoScroll) {
          this.awaitAutoScrollTimer = setTimeout(() => {
            clearTimeout(this.awaitAutoScrollTimer);
            this.awaitAutoScrollTimer = null;
            this.autoScroll();
          }, autoScrollAgainTime * 1000);
        }
      },
    };
    return (
      <ScrollArea {...props}>
        <div {...contentProps}>
          {children}
        </div>
      </ScrollArea>
    );
  }
}