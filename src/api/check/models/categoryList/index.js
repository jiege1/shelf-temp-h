
import Base from '../../common/base';
import Category from '../category';

export default class CategoryList extends Base {

  name = 'CategoryList';

  checks = {
    list: {
      type: 'Array',
      child: Category,
      min: 1,
      max: 100,
    }
  };

  constructor(props) {
    super(props);
    this.create();
  }

}