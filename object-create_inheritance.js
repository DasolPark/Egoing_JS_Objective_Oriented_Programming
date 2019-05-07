var superObj = { superVal: "super" };
// var subObj = { subVal: "sub" };
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj); // Same above two line
subObj.subVal = "sub";

debugger;

console.log("superObj: ", subObj.superVal);
console.log("subObj: ", subObj.subVal);
