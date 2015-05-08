import BindBuilder from "./BindBuilder.js"

var prefix = "___bindable___"

export default class PropertiesBuilder extends BindBuilder {

  setupProperty(key, properties) {
    properties[key] = "@"+this._bindObj[key];
    properties[prefix+key] = "=?bind"+this._bindObj[key][0].toUpperCase() + this._bindObj[key].slice(1);
    Object.defineProperty(this._component.prototype, prefix+key, {
      enumerable: true,
      configurable: true,
      set: function(value) {
        this[key] = value;
      }
    });
  }

}
