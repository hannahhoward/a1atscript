import EventsBuilder from "../src/a1atscript/ng2Directives/EventsBuilder.js"

class Component {
  constructor() {

  }
}

describe("EventsBuilder", function() {
  var eventsObj, events;

  beforeEach(function() {
    eventsObj = {
      "cheese": "danish",
      "apple": "apple"
    };
    events = (new EventsBuilder(eventsObj, Component)).build();
  });

  it("should setup the correct events", function() {
    expect(events).toEqual({
      "cheese": "=?onDanish",
      "apple": "=?onApple"
    });
  });

});
