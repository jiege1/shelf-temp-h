import Ajax from 'common/utils/ajax';
import LocalStorage from 'common/utils/localStorage';
import moment from 'moment';

/**
 * 数据打点
 *
 * @param action    {String}  数据打点的内容
 * @param itemId      商品ID,   string or null
 * @param couponId    优惠卷ID,   string or null
 *
 * @returns {Promise<void>}
 *
 * ACTION枚举值：
 * ITEM_CLICK（商品点击时必须设置ITEM_ID）
 * RECEIVE_COUPONS（领取优惠券时必须设置COUPON_ID）
 * BUY_CLICK（点击购买）
 * SHARE_CLICK（点击分享）
 *
 */
export default function({action = 'ITEM_CLICK', itemId, couponId}) {

  // 记录到本地日志
  if (ele && ele.logger) {

    if (itemId) {
      ele.logger.info(`${action} ${itemId}`);
    } else if (couponId) {
      ele.logger.info(`${action} ${couponId}`);
    }

  }

  const op_time = moment().format('YYYY-MM-DD HH:mm:ss');

  // 如果前面有请求 终止
  Ajax.cancel();

  if (!LocalStorage.getJSON('feedBack')) {
    LocalStorage.putJSON('feedBack', [{op_time, action, itemId, couponId}]);
  } else {
    LocalStorage.putJSON('feedBack', [...LocalStorage.getJSON('feedBack'), {op_time, action, itemId, couponId}]);
  }

  Ajax.query({
    url: 'feedBack',
    method: 'post',
    params: {
      actions: localStorage.getItem('feedBack')
    },
    header: {cancel: true},
  }).then(res => {

    // 发送成功，清楚本地缓存的打点数据
    if (res) {
      LocalStorage.clear();
    }

  });

}