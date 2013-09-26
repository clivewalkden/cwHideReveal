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
      this.content = $('#test-content');

	  $(this.link).CWHideReveal();
    }
  });

  test("Test basic functionality", function(){
    expect(5);

	ok(this.link.is(':visible'),'Clickable area is visible');

	ok(this.content.is(':hidden'),'Content is hidden');

	this.link.click();

	ok(this.content.is(':visible'),'Content is shown after button click');
  });

}(jQuery));
