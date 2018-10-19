import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import img from 'assets/images/shopImages/select.png';

export default class SelectGoods extends React.Component {

  static propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    selected: false,
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onClick, selected} = this.props;

    return (
      <div onClick={onClick} className={css.box}>
        {selected && <img src={img} alt=""/>}
      </div>
    );
  }
}