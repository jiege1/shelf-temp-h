import React from 'react';
import PropTypes from 'prop-types';
import css from './index.less';
import QRCode from 'qrcode.react';

export default class Detail extends React.Component {

  static propTypes = {
    goods: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const {customPicUrl, picUrl, customTitle, title, goodsTaobaoId, customPrice, price} = this.props.goods;
    const props = {
      size: 126,
      value: `https://detail.m.liangxinyao.com/item.htm?id=${goodsTaobaoId}`
    };
    return (
      <div className={css.detailBox}>
        <img src={customPicUrl ? customPicUrl : picUrl} className={css.pic} alt=""/>
        <div className={css.detail}>
          <div className={css.title}>
            {customTitle ? customTitle : title}
          </div>
          <div className={css.priceBox}>
            <div className={css.price}>
              &yen; <span>{customPrice ? customPrice : price}</span>
            </div>
            <div className={css.qrBox}>
              <QRCode {...props}/>
              <span className={css.text}>手淘扫码购买</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}