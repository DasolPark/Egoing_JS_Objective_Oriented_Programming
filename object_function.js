// 1. call
// change context every excute

var park = {
  name: "david",
  math: 90,
  english: 99
};
var jung = {
  name: "judy",
  math: 90,
  english: 80
};
function sum(prefix) {
  return prefix + (this.math + this.english);
}

console.log("sum.call(park)", sum.call(park, "=> "));
console.log("sum.call(jung)", sum.call(jung, ": "));

// 2. bind
// make permanent function

var parkSum = sum.bind(park, "-> ");

console.log("parkSum()", parkSum());
