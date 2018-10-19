import bi from 'assets/images/redRainImages/otherImgs/bi.png';
import one1 from 'assets/images/redRainImages/xulie1/1.png';
import one2 from 'assets/images/redRainImages/xulie1/2.png';
import one3 from 'assets/images/redRainImages/xulie1/3.png';
import one4 from 'assets/images/redRainImages/xulie1/4.png';

import two1 from 'assets/images/redRainImages/xulie2/11.png';
import two2 from 'assets/images/redRainImages/xulie2/22.png';
import two3 from 'assets/images/redRainImages/xulie2/33.png';
import two4 from 'assets/images/redRainImages/xulie2/44.png';

const assetResources = {
  redRainImages: {
    xulie1: [
      {
        url: one1,
        crossOrigin: true,
      },
      {
        url: one2,
        crossOrigin: true,
      },
      {
        url: one3,
        crossOrigin: true,
      },
      {
        url: one4,
        crossOrigin: true,
      },
    ],
    xulie2: [
      {
        url: two1,
        crossOrigin: true,
      },
      {
        url: two2,
        crossOrigin: true,
      },
      {
        url: two3,
        crossOrigin: true,
      },
      {
        url: two4,
        crossOrigin: true,
      },
    ],
    otherImgs: [
      {
        url: bi,
        crossOrigin: true,
      },
    ],
  }
};

export const addRes = () => {
  let resources = [];

  for (let key in assetResources.redRainImages) {

    resources = resources.concat(assetResources.redRainImages[key]);

  }

  return resources;
};

// const assetResources = {
//   redRainImages: {
//     xulie1: [
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie1/1.png',
//         crossOrigin: true,
//       },
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie1/2.png',
//         crossOrigin: true,
//       },
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie1/3.png',
//         crossOrigin: true,
//       },
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie1/4.png',
//         crossOrigin: true,
//       },
//     ],
//     xulie2: [
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie2/11.png',
//         crossOrigin: true,
//       },
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie2/22.png',
//         crossOrigin: true,
//       },
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie2/33.png',
//         crossOrigin: true,
//       },
//       {
//         url: 'http://localhost:8008/images/redRainImages/xulie2/44.png',
//         crossOrigin: true,
//       },
//     ],
//     otherImgs: [
//       {
//         url: 'http://localhost:8008/images/redRainImages/otherImgs/bi.png',
//         crossOrigin: true,
//       },
//     ],
//   }
// };

// export const addRes = async(type) => {
//   let resources = [];
//
//   for (let key in assetResources[type]) {
//
//     let value = assetResources.redRainImages[key];
//
//     value.forEach(item => {
//       item.url = `${key}/${item.url}`;
//       resources.push(item);
//     });
//
//   }
//
//   console.log('resources==', resources);
//
//   await Promise.all(resources.map(item => {
//     return new Promise((resolve) => {
//       console.log('assets/images/' + item.url);
//       import('assets/images/redRainImages/' + item.url).then(res => {
//         console.log('res======', res);
//         item.url = res.default;
//         resolve(item);
//       });
//     });
//   })).then(res => {
//     resources = res;
//     // console.log(resources);
//   });
//   return resources;
// };
