var park = {
  name: "david",
  math: 90,
  english: 99,
  sum: function() {
    return this.math + this.english;
  }
};

// var jung = {
//   name: "judy",
//   math: 80,
//   english: 90
// };
// jung.__proto__ = park;

var jung = Object.create(park);
jung.name = "judy";
jung.math = 80;
jung.english = 80;
jung.avg = function() {
  return (this.math + this.english) / 2;
};

console.log("jung sum: ", jung.sum());
console.log("jung avg: ", jung.avg());
