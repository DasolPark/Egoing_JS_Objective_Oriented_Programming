function scopeTestFunc() {
  for (var i = 0; i < 5; i++) {
    var printForFunc = i;
  }
  console.log(printForFunc);
}

function scopeTestBlock() {
  for (let i = 0; i < 5; i++) {
    let printForBlock = i;
  }
  console.log(printForBlock);
}

console.log(scopeTestFunc());
console.log(scopeTestBlock());

// var is function scope
// let and const are block scope (ES6)
