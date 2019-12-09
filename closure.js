// 1. inner & outer function

// function outer() {
//   var title = 'hi';
//   function inner() {
//     console.log(title);
//   }
//   inner();
// }
// outer();

// 2. What is closure?

// function outer() {
//   var title = 'hi';
//   return function() {
//     console.log(title);
//   };
// }

// inner = outer();
// inner();

// 3. Private variable

// function factory_movie(title) {
//   return {
//     get_title: function() {
//       return title;
//     },
//     set_title: function(_title) {
//       title = _title;
//       //if(typeof _title === 'String'){
//       //   title = _title;
//       // }else{
//       //   console.log('Please Input String');
//       // }
//     }
//   };
// }

// ghost = factory_movie('Ghost in the shell');
// matrix = factory_movie('Matrix');

// console.log(ghost.get_title());
// console.log(matrix.get_title());

// ghost.set_title('Inception');

// console.log(ghost.get_title());
// console.log(matrix.get_title());

// 4. application of closure

// X
// var arr = [];
// for (var i = 0; i < 5; i++) {
//   arr[i] = function() {
//     return i;
//   };
// }
// for (var index in arr) {
//   console.log(arr[index]());
// }
// for의 i는 외부함수의 지역변수가 아니다.

// O
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function(id) {
    return function() {
      return id;
    };
  })(i);
}
for (var index in arr) {
  console.log(arr[index]());
}

// var -> function scope
// let, const -> block scope
