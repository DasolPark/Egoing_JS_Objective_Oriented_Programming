var park = {
  name: 'park',
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};
// console.log('park.sum(park.first, park.second)', park.sum(park.first, park.second));
console.log('park.sum(park.first, park.second)', park.sum());

// Keyword this is used to refer to the object to which the method belongs within the method.

// 위에 아무 소속이 없다면 this === window(browser object)
// 객체에 소속되어 있다면 this === 'Object Name'
// Constructor(new) ? 'Object Name' : 'window'

var o = {};
var p = {};
function func() {
  switch (this) {
    case o:
      console.log('o');
      break;
    case p:
      console.log('p');
      break;
    case window:
      console.log('window');
      break;
  }
}

func();
func.apply(o);
func.apply(p);

// 메소드 -> 객체 안에 종속되어있는 함수( master - slave relationship)
// this는 변화무쌍하다
