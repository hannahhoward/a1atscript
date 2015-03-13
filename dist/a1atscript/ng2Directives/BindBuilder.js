var prefix = "___bindable___"
export default class BindBuilder {
  constructor(bindObj, component) {
    this._bindObj = bindObj;
    this._component = component;
  }

  build() {
    var bind = {};
    Object.keys(this._bindObj).forEach((key) => {
      bind[key] = "@"+this._bindObj[key];
      bind[prefix+key] = "=?bind"+this._bindObj[key][0].toUpperCase() + this._bindObj[key].slice(1);
      Object.defineProperty(this._component.prototype, prefix+key, {
        enumerable: true,
        configurable: true,
        set: function(value) {
          this[key] = value;
        }
      });
    });
    return bind;
  }
}
