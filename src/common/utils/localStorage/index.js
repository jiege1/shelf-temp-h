export default class LocalStorage {

  // 获取是否有数据
  static get isData() {
    return !!localStorage.length;
  }

  // 添加键值对
  static put(key, value) {
    localStorage.setItem(key, value);
  }

  // 添加json对象
  static putJSON(key, json) {
    localStorage.setItem(key, JSON.stringify(json));
  }

  // 根据key查找JSON对象
  static getJSON(key) {
    if (localStorage.getItem(key) === undefined) return null;
    return JSON.parse(localStorage.getItem(key));
  }

  // 根据key查找value
  static get(key) {
    if (localStorage.getItem(key) === undefined) return null;
    return localStorage.getItem(key);
  }

  // 移除key对应的元素
  static remove(key) {
    localStorage.removeItem(key);
  }

  // 清空localStorage
  static clear() {
    localStorage.clear();
  }

  // 根据索引获得item，结果为一个json对象 {key,value}
  static indexOf(index) {
    let item = {};
    if (localStorage.length <= index) {
      return null;
    }

    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    item.key = key;
    item.value = value;
    return item;
  }
}
