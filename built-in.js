console.group("Math Object");
console.log("Math.PI", Math.PI);
console.log("Math.random", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));
console.groupEnd("Math Object");

var MyMath = {
  PI: Math.PI,
  RANDOM: function() {
    return Math.random();
  },
  FLOOR: function(val) {
    return Math.floor(val);
  }
};
console.group("MyMath Object");
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.RANDOM", MyMath.RANDOM()); // MyMath.RANDOM() 괄호를 써줘야 method가 실행됨
console.log("MyMath.FLOOR", MyMath.FLOOR(4.4));
console.groupEnd("MyMath Object");

var MyMath_PI = Math.PI;
var MyMath_RANDOM = function() {
  return Math.random();
};
var MyMath_FLOOR = function(val) {
  return Math.floor(val);
};
