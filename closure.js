function outer() {
  var title = 'hi';
  function inner() {
    console.log(title);
  }
  inner();
}
outer();
