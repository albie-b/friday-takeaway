'use strict';

describe('Total', function(){
  var total
  beforeEach(function(){
    total = new Total();
  });
  describe('User tests', function(){
    it('can send a recipt', function(){
      expect(total.recipt(['pizza', 'chips'])).toEqual(11.99)
    });
  });
});
