import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import ScrollArea from 'components/scrollArea';
import MAIN from 'common/const/main';
import {modules} from 'modules';
import Detail from './components/detail';
import BuyShow from './components/buyShow';
import cart from 'assets/images/cart.png';

export default class DetailModal extends React.Component {

  static propTypes = {
    goods: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    onAddCart: PropTypes.func,
  };

  static defaultProps = {
    onClose: () => {},
    onAddCart: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderCartAddFav() {

    const {onAddCart, goods} = this.props;
    return (
      <div className={css.cartBox}>
        <div onClick={() => {
          onAddCart(goods.goodsTaobaoId);
        }}>
          <img src={cart} alt=""/>
          <span>加入购物车</span>
        </div>
      </div>
    );
  }

  renderDescription() {
    const {customDescription} = this.props.goods;

    const descriptionImgs = customDescription.replace(/[，]|[;]|[；]/g, ',').split(',');

    return (
      <ScrollArea className={css.scroll}>
        {
          descriptionImgs.map((url, index) => <img key={`desc_${index}`} src={url} alt=""/>)
        }
      </ScrollArea>
    );

  }

  render() {
    const {goods: {buyShow, ...other}, onClose} = this.props;
    const {src, ...styles} = MAIN.detail.closeImg;
    const closeProps = {
      className: css.close,
      style: styles,
      onClick: onClose,
    };
    return (
      <div className={css.wrapper}>
        <div className={css.content}>
          <div className={css.left}>
            <BuyShow buyShow={buyShow}/>
            <div>
              <Detail goods={other}/>
              {
                modules.shopCar && this.renderCartAddFav()
              }
            </div>
          </div>
          <div className={css.right}>
            {this.renderDescription()}
          </div>
        </div>
        <div {...closeProps}>
          <img src={src} alt=""/>
        </div>
      </div>
    );
  }
}