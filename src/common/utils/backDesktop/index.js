import Utils from 'common/utils';

/**
 * 在支持手势的云货架上，添加手势控制，回到桌面
 *
 * 手势规则，分别用5，4，3，2，1跟手指触碰屏幕
 */
(() => {

  let step = null;
  let restoreTimer = null;

  // 30秒后还原状态
  const overtimeRestore = () => {
    if (restoreTimer) {
      clearTimeout(restoreTimer);
      restoreTimer = null;
    }

    restoreTimer = setTimeout(() => {
      step = null;
      clearTimeout(restoreTimer);
      restoreTimer = null;
    }, 30 * 1000);
  };

  // 置空状态
  const restore = () => {
    if (restoreTimer) {
      clearTimeout(restoreTimer);
      restoreTimer = null;
    }
    step = null;
    clearTimeout(restoreTimer);
    restoreTimer = null;

  };

  if (Utils.isMobile()) {

    Utils.addEvent(window, 'touchstart', (e) => {
      const fingerLength = e.touches.length;

      // 初始使用5跟手指
      if (!step && fingerLength === 5) {
        step = 5;
      } else if (step === fingerLength + 1) {
        step = fingerLength;
      } else {
        // console.log('restore====');
        // restore();
        return;
      }

      // step === 1 时，触发回到桌面
      if (step === 1) {
        alert('回到桌面');

        restore();
        return;
      }

      overtimeRestore();
    });

  }

})();

