// 1. Object factory(prototype)

function Person(name, math, english) {
  this.name = name;
  this.math = math;
  this.english = english;
  // Below function is very memory-consuming(every new object)
  //   this.sum = function() {
  //     return this.math + this.english;
  //   };
}

// Below prototype recommended(one function share)
Person.prototype.sum = function() {
  return this.math + this.english;
};

var park = new Person("david", 90, 80);

console.group("1. Object factory");
console.log("park.sum(): ", park.sum());
console.groupEnd();

// 2. class factory(inheritance, method overriding)

class classPerson {
  constructor(name, math, english) {
    this.name = name;
    this.math = math;
    this.english = english;
  }
  sum() {
    return this.math + this.english;
  }
}

var jung = new classPerson("judy", 80, 80);
console.group("2. class factory");
console.log("jung: ", jung);
console.log("jung.sum(): ", jung.sum());

class classPersonSci extends classPerson {
  constructor(name, math, english, science) {
    super(name, math, english);
    this.science = science;
  }
  sum() {
    return super.sum() + this.science;
  }
}

var lee = new classPersonSci("peter", 70, 70, 60);
console.log("lee: ", lee);
console.log("lee.sum(): ", lee.sum());
console.groupEnd();

// 3. __proto__ & Object.create() 'Inheritance between objects'

var superObj = { superVal: "super" };
var subObj = { subVal: "sub" };

subObj.__proto__ = superObj;

console.group("3. __proto__ & Object.create()");
console.log("subObj.superVal: ", subObj.superVal);
console.log("subObj.subVal: ", subObj.subVal);

var thirdObj = Object.create(superObj);
thirdObj.thirdVal = "third";

console.log("thirdObj.superVal: ", thirdObj.superVal);
console.log("thirdObj.thirdVal: ", thirdObj.thirdVal);

console.groupEnd();
