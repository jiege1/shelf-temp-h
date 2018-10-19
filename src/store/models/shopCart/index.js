
import {observable, action, computed} from 'mobx';
import Base from 'store/models/base';

export default class ShopCart extends Base {

  @observable visible = false;
  // @observable menuIndex = 0; //购物车或收藏
  @observable selected = [];
  @observable goodsContainer = {};

  constructor(props) {
    super(props);
  }

  @computed get totalPrice() {
    let total = 0;
    this.selected.forEach(goodsId => {
      total += this.getGoodsPrice(goodsId);
    });
    return total;
  }

  @computed get hasSelectAll() {
    const allCartGoods = Object.keys(this.goodsContainer);
    return !!(allCartGoods.length && allCartGoods.length === this.selected.length);
  }

  getGoodsDetail(goodsId) {
    return this.parent.allGoods.find(item => item.goodsTaobaoId === goodsId);
  }

  getGoodsPrice(goodsId) {
    const goodsNum = this.goodsContainer[goodsId] || 0;
    const goods = this.getGoodsDetail(goodsId) || 0;
    const unitPrice = parseFloat(goods.price);
    return goodsNum * unitPrice;
  }

  /**
   * 添加商品数量
   * @param goodsId
   */
  @action add(goodsId) {

    const goodsHasIn = this.goodsContainer[goodsId] || 0;

    this.goodsContainer = {
      ...this.goodsContainer,
      [goodsId]: goodsHasIn + 1,
    };

  }

  /**
   * 减少商品数量
   * @param goodsId
   */
  @action reduce(goodsId) {

    const goodsHasIn = this.goodsContainer[goodsId];

    if (goodsHasIn > 1) {
      this.goodsContainer = {
        ...this.goodsContainer,
        [goodsId]: goodsHasIn - 1,
      };
    }
  }

  /**
   * 清空购物车
   */
  @action clear() {
    this.selected = [];
    this.goodsContainer = {};
  }

  /**
   * 选中单个商品
   * @param goodsId
   */
  @action triggerSelect(goodsId) {

    const goodsIdIndex = this.selected.indexOf(goodsId);

    if (goodsIdIndex > -1) {
      this.selected.splice(goodsIdIndex, 1);
    } else {
      this.selected.push(goodsId);
    }

  }

  /**
   * 全选
   */
  @action selectAll() {
    if (this.hasSelectAll) {
      this.selected = [];
    } else {
      this.selected = Object.keys(this.goodsContainer);
    }

  }

  @action pay() {
    console.log('结算!');
  }

}