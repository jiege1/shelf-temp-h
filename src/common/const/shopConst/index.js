import menu1 from 'assets/images/shopImages/menuIcon1.png';
import menu2 from 'assets/images/shopImages/menuIcon2.png';
import shopCart from 'assets/images/shopImages/shopCart.png';
import addCart from 'assets/images/shopImages/addCart.png';

export const menus = [
  {
    label: '购物车',
    src: menu1
  },
];

export default {
  cartEntry: {
    src: shopCart,
    top: 60,
    left: 946,
    width: 71,
    height: 54,
  },
  addCart: {
    src: addCart,
    top: 10,
    right: 10,
    width: 46,
    height: 46,
  },
};