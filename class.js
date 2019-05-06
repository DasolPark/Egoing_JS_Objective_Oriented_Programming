class Person {
  constructor(name, math, english) {
    this.name = name;
    this.math = math;
    this.english = english;
  }
  // 1. method in class (recomened method)
  sum() {
    return "original: " + (this.math + this.english);
  }
}

// 2. prototype
// Person.prototype.sum = function() {
//   return "prototype: " + (this.math + this.english);
// };

var dasol = new Person("david", 90, 99);
var hyunjin = new Person("judy", 99, 95);
// 3. personalize method(method overriding)
hyunjin.sum = function() {
  return "hyunjin sum: " + (this.math + this.english);
};

console.group("DASOL");
console.log("DASOL: ", dasol);
console.log("DASOL SUM: ", dasol.sum());
console.groupEnd("DASOL END");

console.group("HYUNJIN");
console.log("HYUNJIN: ", hyunjin);
console.log("HYUNJIN SUM: ", hyunjin.sum());
console.groupEnd("HYUNJIN END");
