(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('CWHideReveal', {
    // This will run before each test in this module.
    setup: function() {
      this.link = $('.demo1');
      this.content = $('#example-content');
    }
  });

  test("test something", function(){
    expect(1);

    ok($('body').is(':visible'),"Document loaded");
  });

//  test("check if box is revealed on click", function() {
//
//	// Specify number of assertions for this test.
//	expect(1);
//
//	// Initialize module
//	$(this.link).CWHideReveal();
//
//	// Check original state of content (boolean assertion).
//	ok(this.content.is(":visible"), "Content is initially hidden");
//
//	// Trigger click event on native button element.
//	QUnit.triggerEvent(this.link, "click");
//
//	// Check state of toggleBox after clicking the button.
//	//ok(this.content.is(":visible"), "content is shown after button click");
//
//	//QUnit.triggerEvent(this.link, "click");
//	//ok(this.content.is(":hidden"), "content is hidden again after button click");
//  });

}(jQuery));
