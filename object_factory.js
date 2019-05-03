function Person(name, math, english, science) {
  this.name = name;
  this.math = math;
  this.english = english;
  this.science = science;
  this.sum = function() {
    return this.math + this.english + this.science;
  };
}

const park = new Person("david", 90, 80, 99);
const jung = new Person("judy", 99, 99, 99);

console.log(park.sum());
console.log(jung.sum());

// Date도 결국 함수다. 나도 Date과 같은 함수를 만들 수 있다.
// new 는 객체를 생성하는 생성자 키워드(constructor)
