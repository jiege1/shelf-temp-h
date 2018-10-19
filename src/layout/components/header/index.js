import React from 'react';
import css from './index.less';
import PropTypes from 'prop-types';
import APP from 'common/const/app';

export default class Header extends React.Component {

  static propTypes = {
    index: PropTypes.number,
  };

  static defaultProps = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const {src, width, height, top, left} = APP.pages[this.props.index].logo;

    const props = {
      style: {width, height, top, left},
      className: css.logoBox,
    };

    return (
      <div {...props}>
        <img src={src} alt=""/>
      </div>
    );
  }

}