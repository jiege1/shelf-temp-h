const IS_DEV = process.env.NODE_ENV !== 'production';
const rootSrc = __dirname + '/src';

module.exports = (config) => {

  config = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        components: rootSrc + '/components',
        common: rootSrc + '/common',
        assets: rootSrc + '/assets',
        api: rootSrc + '/api',
        modules: rootSrc + '/modules',
        store: rootSrc + '/store',
      }
    },
  };

  return config;
};