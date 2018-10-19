import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import MAIN from 'common/const/main';
import {modules} from 'modules';
import CART from 'common/const/shopConst';

export default class GoodsCard extends React.Component {

  static propTypes = {
    goods: PropTypes.object.isRequired,
    onClickItem: PropTypes.func,
    onAddCart: PropTypes.func,
  };

  static defaultProps = {
    onClickItem: () => {},
    onAddCart: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderAddCart() {
    if (!modules.shopCar) return null;
    const {goods, onAddCart} = this.props;

    const {src, ...other} = CART.addCart;

    const props = {
      src,
      style: other,
      className: css.addCart,
      onClick: (e) => {
        e.stopPropagation();
        onAddCart(goods.goodsTaobaoId);
      },
    };
    return <img {...props} />;
  }

  render() {
    const {card} = MAIN.goodsList;
    const {goods: {picUrl, title}, onClickItem} = this.props;

    const props = {
      className: css.card,
      style: card,
      onClick: onClickItem,
    };


    return (
      <div {...props}>
        <div className={css.picBox}>
          <img src={picUrl} alt=""/>
        </div>
        <div className={css.titleBox}>
          {title}
        </div>
        {
          modules.shopCar && this.renderAddCart()
        }
      </div>
    );
  }
}