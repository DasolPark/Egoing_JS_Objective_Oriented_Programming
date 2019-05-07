function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function() {
  return this.first + this.second;
};

var park = new Person("park", 10, 20);

var jung = new Person("jung", 10, 10);

console.log(park.name);

park.sum();
