import BindBuilder from "./BindBuilder.js"

var prefix = "___bindable___"

export default class EventsBuilder extends BindBuilder {

  setupProperty(key, events) {
    events[key] = "=?on"+this.bindObj[key][0].toUpperCase() + this.bindObj[key].slice(1);
  }

}
