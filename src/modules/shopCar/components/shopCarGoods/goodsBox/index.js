import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import css from './index.less';
import SelectGoods from 'components/selectGoods';

@observer
export default class GoodsBox extends React.Component {

  static propTypes = {
    goodsId: PropTypes.string.isRequired,
    shopCart: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {

    const {goodsId, shopCart} = this.props;

    const goodsDetail = shopCart.getGoodsDetail(goodsId);
    const {picUrl, title, price} = goodsDetail;

    const selectGoodsProps = {
      selected: shopCart.selected.some(id => id === goodsId),
      onClick: () => {
        shopCart.triggerSelect(goodsId);
      },
    };
    return (
      <div className={css.box}>
        <div className={css.leftSelect}>
          <SelectGoods {...selectGoodsProps}/>
        </div>
        <div className={css.right}>
          <img className={css.img} src={picUrl}/>
          <div className={css.title}>
            {title}
          </div>
          <div className={css.prize}>
            ￥<span>{price}</span>
          </div>
          <div className={css.add}>
            <div className={css.addNum} onClick={() => {
              shopCart.add(goodsId);
            }}/>
            {shopCart.goodsContainer[goodsId]}
            <div className={css.reduceNum} onClick={() => {
              shopCart.reduce(goodsId);
            }}>-</div>
          </div>
        </div>
      </div>
    );
  }
}