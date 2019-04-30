var memberArray = ["david", "judy", "selena"];

console.group("Array loop");
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("Array loop");

var memberObject = {
  manager: "david",
  developer: "judy",
  designer: "selena"
};
console.group("Object loop");
for (var name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd("object loop");
