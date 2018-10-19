
import Base from '../../common/base';

export default class Goods extends Base {

  constructor(props) {
    super(props);
    this.create();
  }


  name = '商品';

  checks = {
    goodsTaobaoId: {
      type: 'String',
      isRequired: true,
    },
    buyShow: {
      type: 'String',
      defaultValue: 'buyShow'
    },
    title: {
      type: 'String',
      priority: 'customTitle',
      isRequired: true,
      defaultValue: 'title'
    },
    price: {
      type: 'String',
      priority: 'customPrice',
      isRequired: true,
      defaultValue: 'price'
    },
    picUrl: {
      type: 'String',
      priority: 'customPicUrl',
      isRequired: true,
      defaultValue: 'picUrl'
    },
    customDescription: {
      type: 'String',
      defaultValue: 'customDescription',
      isRequired: true,
    },
  };

}