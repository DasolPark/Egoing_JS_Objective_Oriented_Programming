function Person(name, math, english) {
  this.name = name;
  this.math = math;
  this.english = english;
}

Person.prototype.sum = function() {
  return "sum: " + (this.math + this.english);
};

var david = new Person("david", 90, 90);
console.log(david.sum());
var judy = new Person("judy", 99, 99);
judy.sum = function() {
  return "modified: " + (this.math + this.english);
};
console.log(judy.sum());
var peter = new Person("peter", 80, 80);

console.log(david); // not included sum method
console.log(judy); // included sum method
console.log(peter);
