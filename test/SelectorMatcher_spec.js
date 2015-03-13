import SelectorMatcher from "../src/a1atscript/ng2Directives/SelectorMatcher.js"

describe("SelectorMatcher", function() {
  var selectorMatcher;
  describe("element", function() {
    beforeEach(function() {
      selectorMatcher = new SelectorMatcher("hello");
    });

    it("should be restricted to an element", function() {
      expect(selectorMatcher.restrict).toEqual('E');
    });

    it("should have the right name", function() {
      expect(selectorMatcher.name).toEqual('hello');
    });
  });
  describe("attribute", function() {
    beforeEach(function() {
      selectorMatcher = new SelectorMatcher("[hello]");
    });

    it("should be restricted to an element", function() {
      expect(selectorMatcher.restrict).toEqual('A');
    });

    it("should have the right name", function() {
      expect(selectorMatcher.name).toEqual('hello');
    });
  });
  describe("class", function() {
    beforeEach(function() {
      selectorMatcher = new SelectorMatcher(".hello");
    });

    it("should be restricted to an element", function() {
      expect(selectorMatcher.restrict).toEqual('C');
    });

    it("should have the right name", function() {
      expect(selectorMatcher.name).toEqual('hello');
    });
  });
});
