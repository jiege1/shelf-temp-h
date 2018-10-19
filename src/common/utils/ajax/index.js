import axios from 'axios';
import {sendError} from 'components/errorLog';

/**
 * Ajax.query({url, params, method = 'get'})
 *
 */
export default class Ajax {

  static query({url, params = {}, method = 'get', header = {cancel: false}}) {

    const api = eval('CFG.api.' + url);

    params = {
      ...params,
    };

    if (method === 'get') {
      params = {params};
    }

    // 添加终止ajax
    const {cancel} = header;
    if (cancel) {
      const CancelToken = axios.CancelToken;
      this.source = CancelToken.source();
    }

    return new Promise((resolve, reject) => {
      axios[method](api, params, header).then(res => {
        const {data, code, msg} = res.data;
        if (!code && data) {
          resolve(data);
        }
        sendError({error: {code, msg, data: null}, info: 'Ajax failed!'});
        reject({code, msg, data: null});
      }).catch(err => {

        sendError({error: err, info: 'Ajax failed!'});
        reject(err);
      });
    });

  }

  static cancel() {
    if (this.source) {
      this.source.cancel('取消请求');
    }

  }
}