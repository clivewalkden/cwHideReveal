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

  QUnit.module('Default Functionality', {
    // This will run before each test in this module.
    before: function() {
      this.hidereveal = $('.js-hide-reveal');
      this.link = $('.demo1');
      this.content = $('#test-content');

      $(this.hidereveal).CWHideReveal();
    }
  });

  QUnit.test("Basic", function(assert){
    assert.expect(3);

  	assert.ok(this.link.is(':visible'),'Clickable area is visible');
  	assert.ok(this.content.is(':hidden'),'Content is hidden');
  	this.link.click();
  	assert.ok(this.content.is(':visible'),'Content is shown after button click');
  });

  QUnit.module('Accordion', {
    before: function(){
      this.hidereveal = $('.js-hide-reveal');
      this.link = $('.demo1');
      this.link2 = $('.demo2');
      this.content = $('#test-content');
      this.content2 = $('#test-content2');

      $(this.hidereveal).CWHideReveal({
        accordion   : true,
        openClass   : 'demo2-open'
      });
    }
  });

  QUnit.test("Accordion", function(assert){
    assert.expect(5);

    assert.ok(this.content.is(':hidden'),'Content 1 is hidden');
    assert.ok(this.content2.is(':hidden'),'Content 2 is hidden');

    this.link.click();

    assert.ok(this.content.is(':visible'),'Content 1 is visible');
    assert.ok(this.content2.is(':hidden'),'Content 2 is hidden');

    this.link2.click();

    //ok(this.content.is(':hidden'),'Content 1 is hidden');
    assert.ok(this.content2.is(':visible'),'Content 2 is visible');
  });

}(jQuery));
