
import {action, isObservableProp} from 'mobx';

export default class Base {

  constructor(props) {
    this.setProps(props);
  }

  setProps(props) {
    for (let key in props) {
      this[key] = props[key];
    }
  }

  @action update(obj) {
    Object.keys(obj).forEach(key => {
      if (isObservableProp(this, key)) {
        if (this[key] !== obj[key]) {
          this[key] = obj[key];
        }
      } else {
        console.error(`${key} is not an observable key!`);
      }
    });
  }

}