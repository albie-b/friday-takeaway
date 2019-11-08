'use strict';

describe('Menu', function(){
  var menu;
  beforeEach(function(){
    menu = new Menu();
  });
  describe('User Tests',function(){
    it('can view a list of items', function(){
      expect(menu.all).toEqual('pizza: 9.99 \n chips: 2.00')
    });
  });
});
