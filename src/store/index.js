
import {observable, action, computed} from 'mobx';
import Base from './models/base';
import {loadModules, modules} from 'modules';
import {getGoodsList} from 'api';
import ShopCart from './models/shopCart';
import feedBack from 'common/utils/feedBack';
import Utils from 'common/utils';

class Store extends Base {

  @observable loading = true;
  @observable selectType = modules.mainType === 'category' ? -1 : 0;
  @observable isTouching = false;
  @observable detail = null;
  @observable showCart = false;
  @observable goodsList = [];
  @observable modules = [];
  @observable shopCart = new ShopCart({parent: this});

  @computed get allGoods() {

    if (!modules.mainType) {
      return this.goodsList;
    }

    // 多品牌，或者有分类的情况
    let addGoods = [];
    this.goodsList.forEach(classify => {
      const items = classify.item.map(item => item);
      addGoods = addGoods.concat(items);
    });
    return addGoods;
  }

  /**
   * 加载模块
   * @returns {Promise<void>}
   */
  @action async loadModules() {
    let loadedModules = await loadModules();
    this.update({
      loading: false,
      modules: loadedModules.filter(item => !!item.value),
    });
  }

  /**
   * 请求商品数据
   * @returns {Promise<void>}
   */
  @action async queryGoodsList() {
    // 请求数据
    const goodsList = await getGoodsList();
    this.update({
      goodsList,
    });
  }

  @action showGoodsDetail(goods) {
    this.detail = goods;

    // 数据回流
    if (!Utils.isLocal()) {
      feedBack({
        itemId: goods.goodsTaobaoId,
      });
    }

  }

}

export default new Store();