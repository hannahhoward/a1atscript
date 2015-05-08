export default class BindBuilder {
  constructor(bindObj, component) {
    this._bindObj = bindObj;
    this._component = component;
  }

  build() {
    var properties = {};
    Object.keys(this._bindObj).forEach((key) => {
      this.setupProperty(key, properties)
    });
    return properties;
  }
}
