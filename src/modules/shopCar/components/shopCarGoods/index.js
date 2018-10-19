import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import css from './index.less';
import GoodsBox from './goodsBox';
import SelectGoods from 'components/selectGoods';

@inject('store')
@observer
export default class ShopCarGoods extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderBill() {
    const {shopCart} = this.props.store;

    const selectGoodsProps = {
      selected: shopCart.hasSelectAll,
      onClick: () => {
        shopCart.selectAll();
      },
    };

    const payProps = {
      className: css.buy,
      onClick: () => {
        shopCart.pay();
      },
    };

    return (
      <div className={css.bill}>
        <div className={css.left}>
          <SelectGoods {...selectGoodsProps}/>
          <span className={css.text1}>全选</span>
        </div>
        <div className={css.right}>
          <span className={css.text2}>合计：</span>
          <span className={css.mark}>￥</span>
          <div className={css.prize}>{shopCart.totalPrice}</div>
          <div {...payProps}>
            结算({shopCart.selected.length})
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {shopCart} = this.props.store;
    const cartGoodsIdList = Object.keys(shopCart.goodsContainer);

    return (
      <Fragment>
        <div className={css.box}>
          {
            cartGoodsIdList.map(goodsId => {
              const props = {
                key: goodsId,
                goodsId,
                shopCart,
              };
              return (
                <GoodsBox {...props}/>
              );
            })
          }
        </div>
        {this.renderBill()}
      </Fragment>
    );
  }
}