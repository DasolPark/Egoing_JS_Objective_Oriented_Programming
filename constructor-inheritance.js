function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function() {
  return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second); // pass the this object is really important!
  this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype; // from now on, PersonPlus link to Person.sum, but informal
PersonPlus.prototype = Object.create(Person.prototype); // formal
PersonPlus.prototype.constructor = PersonPlus; // from Now on, PersonPlus's constructor is Person

PersonPlus.prototype.avg = function() {
  return (this.first + this.second + this.third) / 3;
}; // 이걸 또 위로 올리면(상속 코드 위) avg가 사라짐
//__proto__를 쓰면 사라지지 않음. 하지만, 비표준

var park = new PersonPlus("david", 10, 20, 30);
console.log("park.sum()", park.sum());
console.log("park.avg()", park.avg());
console.log("park.constructor", park.constructor);
