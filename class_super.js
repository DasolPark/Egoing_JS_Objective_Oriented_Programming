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

class PersonCantonese extends Person {
  constructor(name, math, english, cantonese) {
    super(name, math, english);
    this.cantonese = cantonese;
  }
  sum() {
    return super.sum() + this.cantonese;
  }
  avg() {
    return (this.math + this.english + this.cantonese) / 3;
    // return this.sum() / 3;
  }
}

var david = new PersonCantonese("david", 90, 90, 90);

console.log(david);
console.log(david.sum());
console.log(david.avg());
