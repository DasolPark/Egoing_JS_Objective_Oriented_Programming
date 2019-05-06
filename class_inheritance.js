class Person {
  constructor(name, math, english) {
    this.name = name;
    this.math = math;
    this.english = english;
  }
  sum() {
    return this.math + this.english;
  }
}

class PersonAvg extends Person {
  avg() {
    // return this.sum() / 2;
    return (this.math + this.english) / 2;
  }
}

var david = new PersonAvg("david", 90, 90);
console.log(david);
console.log(david.sum());
console.log(david.avg());
