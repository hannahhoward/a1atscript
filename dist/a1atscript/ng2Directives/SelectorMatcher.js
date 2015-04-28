var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

export default class SelectorMatcher {
  constructor(selector: string) {
    this._selector = selector;
  }

  _camelizeName() {
    this._name = this._name.replace(SPECIAL_CHARS_REGEXP,
      (_, separator, letter, offset) => offset ? letter.toUpperCase() : letter ).
    replace(MOZ_HACK_REGEXP, 'Moz$1');
  }

  _split() {
    if (this._selector[0] == ".") {
      this._restrict = "C";
      this._name = this._selector.substring(1);
    } else if (this._selector[0] == "[" &&
      this._selector[this._selector.length-1] == "]") {
      this._restrict = "A";
      this._name = this._selector.substring(1, this._selector.length-1);
    } else {
      this._restrict = "E";
      this._name = this._selector;
    }
  }

  get name() {
    if (!this._name) {
      this._split();
    }
    this._camelizeName();
    return this._name;
  }

  get restrict() {
    if (!this._restrict) {
      this._split();
    }
    return this._restrict;
  }

}
