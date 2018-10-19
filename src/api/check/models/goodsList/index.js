
import Base from '../../common/base';
import Goods from '../goods';

export default class GoodsList extends Base {

  name = 'GoodsList';

  checks = {
    list: {
      type: 'Array',
      child: Goods,
      min: 1,
      max: 100,
    }
  };

  constructor(props) {
    super(props);
    this.create();
  }

}