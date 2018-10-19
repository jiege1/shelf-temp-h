// __webpack_public_path__ = CFG.__publicPath__;
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'mobx-react';
import Layout from './layout';
import errorLog from 'components/errorLog';
import './index.less';
import 'common/utils/backDesktop';
import store from './store';
// import vConsole from 'vconsole';
// const Vconsole = new vConsole();


// const Dom = errorLog(
//   <Provider store={store}>
//     <Layout />
//   </Provider>
// );

ReactDom.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);