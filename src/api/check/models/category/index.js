
import Base from '../../common/base';
import Goods from '../goods';

export default class Category extends Base {

  name = 'Category';

  checks = {
    classify: {
      type: 'String',
      defaultValue: 'classify',
      isRequired: true,
    },
    item: {
      type: 'Array',
      child: Goods,
      min: 1,
      max: 100,
    },
  };

  constructor(props) {
    super(props);
    this.create();
  }

}