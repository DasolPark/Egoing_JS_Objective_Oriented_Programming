// function outer() {
//   var title = 'hi';
//   function inner() {
//     console.log(title);
//   }
//   inner();
// }
// outer();

function outer() {
  var title = 'hi';
  return function() {
    console.log(title);
  };
}

inner = outer();
inner();
