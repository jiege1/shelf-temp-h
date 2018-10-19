import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import close from 'assets/images/mainTypeImages/cloes.png';
import classnames from 'classnames';

export default class MainType extends React.Component {

  static propTypes = {};

  static defaultProps = {
    classify: ['爆款专区', '肠道健康', '三高营养', '爆款专区', '肠道健康', '三高营养'],
    mainType: 'sellers',
    classifyIndex: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      classifyVisible: false,
    };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
  }

  click() {
    const {classifyVisible} = this.state;
    this.setState({
      classifyVisible: !classifyVisible
    });
  }

  renderTotal() {
    const props = {
      className: css.boxTotal,
      onClick: this.click
    };
    return (
      <div {...props}>
        全部分类
      </div>
    );
  }

  renderClassify() {
    let {classify, getClassifyIndex = () => {}, classifyIndex, mainType} = this.props;
    if (mainType !== 'sellers') classify = ['全部分类', ...classify];
    const closeProps = {
      className: css.close,
      src: close,
      onClick: this.click
    };
    return (
      <div className={css.classify}>
        <div>
          {
            classify.map((item, index) => {
              let isSelect = index === classifyIndex;
              let newIndex = index;
              if (mainType !== 'sellers') {
                newIndex = index - 1;
                isSelect = newIndex === classifyIndex;
              }
              const props = {
                key: index,
                onClick: () => {
                  getClassifyIndex(newIndex);
                },
                className: classnames(css.smallBox, {[css.select]: isSelect})
              };
              return (
                <p {...props}>
                  {item}
                </p>
              );
            })
          }
        </div>
        <img {...closeProps}/>
      </div>
    );
  }

  render() {
    return this.state.classifyVisible ? this.renderClassify() : this.renderTotal();
  }
}