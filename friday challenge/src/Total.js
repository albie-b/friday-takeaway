'use strict';
var cost = {};
cost['pizza'] = 9.99;
cost['chips'] = 2.00;
function Total(){
  this.current = 0
};
Total.prototype.recipt = function(items){
  var i
  for (i in items) {
    this.current += cost[items[i]]
  };
  return this.current;
};
