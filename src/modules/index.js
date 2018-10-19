

window.shelfModules = {};

export const modules = {
  redRain: false, // 红包雨
  shopCar: false, // 购物车
  mainType: 'sellers', // oneOf([null, 'sellers', 'category'])
};

export const loadModules = async() => {

  const moduleKeys = Object.keys(modules);

  const promises = moduleKeys.map(key => {
    return new Promise((resolve) => {
      if (modules[key]) {
        import(`modules/${key}`).then(res => {
          resolve({
            key,
            value: res.default,
          });
        });
      } else {
        resolve({
          key,
          value: null,
        });
      }
    });
  });

  return Promise.all(promises);
};