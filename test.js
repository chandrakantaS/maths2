// const Math = require('./ops');

// const math = new Math(255);

// var num = math.getNum();

// console.log(num);
// console.log(math.decBinary())
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log('retrieveX: ', retrieveX()); 