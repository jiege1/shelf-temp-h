import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';
import css from './index.less';
import classnames from 'classnames';
import CART, {menus} from 'common/const/shopConst';
import ShopCarGoods from './components/shopCarGoods';
import CollectionGoods from './components/collectionGoods';
import close2 from 'assets/images/shopImages/return2.png';
import close1 from 'assets/images/shopImages/return1.png';

@inject('store')
@observer
export default class ShopCar extends React.Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }

  componentDidMount() {}

  close() {
    const {shopCart} = this.props.store;
    shopCart.update({
      visible: false,
    });
  }

  renderMenu(item, index) {

    const props = {
      key: index,
      className: classnames(css.menu),
    };
    return (
      <div {...props}>
        <img src={item.src} alt=""/>
        {item.label}
      </div>
    );
  }

  renderContent() {
    const {selected} = this.props.store.shopCart;

    return (
      <div className={css.box}>
        <img src={close2} onClick={this.close} className={css.close2} alt=""/>
        <img className={css.close1} src={close1} alt=""/>
        <div className={css.menusBox}>
          {menus.map((item, index) => this.renderMenu(item, index))}
        </div>
        <ShopCarGoods data={selected}/>
      </div>
    );
  }

  renderShopCart() {
    const {src, ...other} = CART.cartEntry;
    const {shopCart} = this.props.store;
    const allCartGoodsIds = Object.keys(shopCart.goodsContainer);

    const props = {
      className: css.shopCart,
      style: other,
      onClick: () => {
        shopCart.update({
          visible: true,
        });
      }
    };
    return (
      <div {...props}>
        <img src={src} />
        <div className={css.count}>
          {allCartGoodsIds.length}
        </div>
      </div>
    );
  }

  render() {
    const {visible} = this.props.store.shopCart;

    return (
      <Fragment>
        {this.renderShopCart()}
        {visible && this.renderContent()}
      </Fragment>
    );
  }
}