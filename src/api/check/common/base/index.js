
export default class Base {

  name = 'base';

  checks = {};

  constructor(props) {
    this.props = props;
  }

  create() {
    Object.keys(this.checks).forEach(key => {
      const check = {key, ...this.checks[key]};
      const value = this.props[key];
      this[`create${check.type}`](check, value);
    });
  }

  createArray(check, value) {

    const {key, child, min = 0, max = Infinity} = check;

    this[key] = [];

    if (value.length < min || value.length > max) {
      this.handleError(`${check.key} 数据长度不正确！`);
    }

    // 如果存在子节点，添加子节点
    if (child) {
      value.forEach(item => {
        this[key].push(new child(item));
      });
    } else {
      this[key] = value;
    }

  }

  createString(check, value) {
    const {
      key,
      defaultValue = '',
      isRequired = false,
      priority,
    } = check;

    // 设置属性
    this[key] = value ? value : defaultValue;

    // 如果存在优先选择的属性替换当前属性
    if (priority) {
      const priorityValue = this.props[priority];

      if (priorityValue) {
        this[key] = priorityValue;
      }

      if (isRequired && !value && !priorityValue) {
        // priorityValue和value的话，报错
        this.handleError(`${key} should not null!`);
      }

    } else if (isRequired && !value) {
      // 非空的话，报错
      this.handleError(`${key} should not null!`);
    }


  }

  /**
   * 获取json
   */
  get getJson() {
    let obj = {};
    Object.keys(this.checks).forEach(key => {
      const check = this.checks[key];

      switch (check.type) {
        case 'Array': {
          if (check.child) {
            obj[key] = this[key].map(item => item.getJson);
          } else {
            obj[key] = this[key];
          }
          break;
        }
        default: {
          obj[key] = this[key];
        }
      }

    });
    return obj;
  }

  handleError(msg = '数据未知错误') {
    console.log({
      name: this.name,
      msg,
    });
  }

}