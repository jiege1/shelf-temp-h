import React from 'react';
import css from './index.less';
import PropsTypes from 'prop-types';
import Text from './components/text';

const createStyle = (txt = '', fontSize = 16, color = 'red') => {
  let string;
  if (txt) {
    string = `<span style="font-size: ${fontSize}px;color:${color};">${txt}</span>`;
  }
  return string;
};

const textHtml = (text) => {
  let string;
  const colorArr = ['#bababa', 'red', 'green', 'blue', 'black'];
  if (text) {
    const color = colorArr[parseInt(Math.random() * colorArr.length)];
    const data = text.length <= 20 ? text : `${text.substring(0, 18)}...`;
    string = `<span style="background: ${color};color: white;padding: 10px 18px;font-size: 16px;border-radius: 21px;border: 1px solid #666;">${data}</span>`;
  }
  return string;
};

class Danmu extends React.Component {

  static propTypes = {
    list: PropsTypes.array,
    duration: PropsTypes.array,
  };

  static defaultProps = {
    list: [
      '把上交国家！',
      '我是来刷存在感的。',
      '忘词这个真的',
      '把上交国家！',
      '我是来刷存在感的。',
      '忘词这个真的',
      '把上交国家！',
      '我是来刷存在感的。',
      '忘词这个真的',
    ],
    duration: [10000, 13000],
  };

  constructor(props) {
    super(props);
    this.state = {
      boxSize: {},
    };
    this.box = React.createRef();
  }

  componentDidMount() {
    this.setState({
      boxSize: this.box.current.getBoundingClientRect(),
    });
  }

  render() {
    const { boxSize } = this.state;
    const { list, duration } = this.props;
    return (
      <div className={css.wrap} ref={this.box}>
        {
          list.map((item, i) => {
            const props = {
              key: i,
              i,
              html: textHtml(item),
              left: boxSize.width + 50 || 1230,
              maxTop: boxSize.height - 42 || 200,
              duration,
              length: item.length * 16 + 100,
            };
            return (
              <Text {...props} />
            );
          })
        }
      </div>
    );
  }
}
export default Danmu;
