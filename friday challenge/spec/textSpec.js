'use strict';

describe('Text', function(){
  var text
  beforeEach(function(){
    text = new Text();
  });
  describe('User tests', function(){
    it('can send a text conformation', function(){
      expect(text.send).toEqual('sent');
    });
  });
});
