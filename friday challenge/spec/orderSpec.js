'use strict';

describe('Order', function(){
  var order
  beforeEach(function(){
    order = new Order();
  });
  describe('User tests', function(){
    it('can select items from the menu', function(){
      order.items('pizza, chips');
      expect(order.currentOrder).toEqual(['pizza', 'chips']);
    });
  });
});
