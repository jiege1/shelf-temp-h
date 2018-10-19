
import Ajax from 'common/utils/ajax';
import {modules} from 'modules';
import checkData from 'api/check';

/**
 * 获取商品列表
 * @returns {Promise<any>}
 */
export const getGoodsList = () => new Promise((resolve) => {

  let url = modules.mainType;

  if (!url) {
    url = 'goodsList';
  }

  Ajax.query({url}).then(res => {
    if (res && res.list && res.list.length) {
      const checkedData = checkData[url](res).getJson;
      resolve(checkedData.list);
    } else {
      requireLocal().then(data => {
        const checkedData = checkData[url](data).getJson;
        resolve(checkedData.list);
      });
    }
  }).catch(e => {
    console.warn('Ajax error! getGoodsList: ', e);
    requireLocal().then(data => {
      const checkedData = checkData[url](data).getJson;
      resolve(checkedData.list);
    });
  });

});

function requireLocal() {
  let url = 'goodsList.json';

  switch (modules.mainType) {
    case 'sellers': {
      url = 'goodsListWithSellers.json';
      break;
    }
    case 'category': {
      url = 'goodsListWithCategory.json';
      break;
    }
  }

  return new Promise((resolve) => {
    import(`./local/${url}`).then(res => {
      resolve(res.default);
    });
  });
}