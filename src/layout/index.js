import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import css from './index.less';
import Header from './components/header';
import Main from './components/main';
import DetailModal from './components/detailModal';
import APP from 'common/const/app';
import {modules} from 'modules';
import SliderVertical from 'components/sliderVertical';

@inject('store')
@observer
export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};

    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    const {store} = this.props;
    store.queryGoodsList();
    store.loadModules();
  }

  onMoreTypeClick(index) {

    const {store} = this.props;
    // 轮播切换
    switch (modules.mainType) {
      case 'sellers': {
        this.sliderRef.current.swipeTo(index);
        break;
      }
      // case 'category': {
      //   // todo category
      //   break;
      // }
    }

    store.update({
      selectType: index,
    });

  }

  renderModules() {
    const {loading, modules: loadedModules, goodsList, selectType} = this.props.store;

    if (loading) return null;

    return loadedModules.map(item => {

      const key = item.key;
      const Module = item.value;

      let props = {
        key: `module_${key}`,
      };

      // 不同模块，补充props
      switch (key) {
        case 'mainType': {
          props = {
            ...props,
            classify: goodsList.map(goods => goods.classify),
            mainType: modules.mainType,
            classifyIndex: selectType,
            getClassifyIndex: this.onMoreTypeClick.bind(this),
          };
          break;
        }
      }

      return <Module {...props}/>;
    });
  }

  /**
   * 多商家，采用轮播来展示
   */
  renderSwipeSellers() {
    const {store, store: {goodsList}} = this.props;

    const props = {
      ref: this.sliderRef,
      autoplay: true,
      dots: false,
      vertical: true,
      autoplaySpeed: 10000,
      beforeChange: (from, to) => {
        store.update({
          selectType: to,
        });
      },
    };

    return (
      <div className={css.layoutWithSwiper}>
        <SliderVertical {...props}>
          {
            goodsList.map(item => {

              const pageProps = {
                key: item.classify,
                className: css.page,
              };

              return (
                <div {...pageProps}>
                  <img src={APP.pages[0].bg} alt="" className={css.bg}/>
                  <Header />
                  <Main goodsList={item.item}/>
                </div>
              );
            })
          }
        </SliderVertical>
        {this.renderModules()}
      </div>

    );
  }

  /**
   * 单个商家
   *
   * @returns {*}
   */
  renderOneSeller() {
    let {goodsList, allGoods, selectType} = this.props.store;

    // 单个商家， 存在分类的话, 过滤数据
    if (goodsList && goodsList.length && modules.mainType === 'category') {
      if (selectType === -1) {
        goodsList = allGoods;
      } else {
        goodsList = goodsList[selectType].item;
      }
    }

    return (
      <div className={css.layout}>
        <img src={APP.pages[0].bg} alt="" className={css.bg}/>
        <Header />
        <Main goodsList={goodsList}/>
        {this.renderModules()}
      </div>
    );
  }

  render() {
    const {store, store: {detail}} = this.props;

    const props = {
      goods: detail,
      onClose: () => {
        store.update({
          detail: null,
        });
      },
      onAddCart: (goodsId) => {
        store.shopCart.add(goodsId);
      },
    };

    return (
      <Fragment>
        {
          modules.mainType === 'sellers' ? this.renderSwipeSellers() : this.renderOneSeller()
        }
        {detail && <DetailModal {...props}/>}
      </Fragment>
    );
  }
}