'use strict';

function Order(){
  this.currentOrder = [];
};

Order.prototype.items = function(items){
  this.currentOrder = items.split(', ');
};
