import GoodsList from './models/goodsList';
import CategoryList from './models/categoryList';
import Sellers from './models/sellers';

function goodsList(json) {
  return new GoodsList(json);
}

function category(json) {
  return new CategoryList(json);
}

function sellers(json) {
  return new Sellers(json);
}

export default {
  goodsList,
  category,
  sellers,
};