import React from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';
import css from './index.less';
import MAIN from 'common/const/main';
import Scroller from 'components/scroller';
import GoodsCard from './components/goodsCard';

@inject('store')
@observer
export default class Main extends React.Component {

  static propTypes = {
    goodsList: PropTypes.array,
  };

  static defaultProps = {
    goodsList: [],
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderGoodsList() {

    const {scrollPaddingTop} = MAIN.goodsList;
    const {goodsList, store} = this.props;

    const props = {
      className: css.listBox,
      style: {
        paddingTop: scrollPaddingTop,
      }
    };
    return (
      <div {...props}>
        {
          goodsList.map((goods, index) => {
            const goodsProps = {
              goods,
              key: `${goods.goodsTaobaoId}_${index}`,
              onClickItem: () => {
                store.showGoodsDetail(goods);
              },
              onAddCart: (goodsId) => {
                store.shopCart.add(goodsId);
              },
            };
            return <GoodsCard {...goodsProps}/>;
          })
        }
      </div>
    );
  }

  render() {
    const {paddingTop, card: {marginLeft, width}} = MAIN.goodsList;
    const scrollHeight = 1080 - paddingTop;
    const {goodsList, store} = this.props;

    const props = {
      className: css.mainContainer,
      style: {
        height: scrollHeight,
        paddingTop,
      },
    };
    const scrollerProps = {
      width: 1920,
      height: scrollHeight,
      direction: 'horizontal',
      contentStyle: {
        width: Math.ceil(goodsList.length / 2) * (width + marginLeft) + marginLeft
      }
    };

    return (
      <div {...props}>
        <Scroller {...scrollerProps}>
          {this.renderGoodsList()}
        </Scroller>
      </div>
    );
  }
}