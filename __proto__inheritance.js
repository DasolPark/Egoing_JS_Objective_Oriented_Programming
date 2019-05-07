var superObj = { superVal: "super" };
var subObj = { subVal: "sub" };

console.log("superObj.superVal: ", superObj.superVal);
console.log("subObj.subVal: ", subObj.subVal);

subObj.__proto__ = superObj;

console.log("subObj.superVal: ", subObj.superVal);
console.log("subObj.subVal: ", subObj.subVal);

subObj.superVal = "sub";

console.log("subObj.superVal: ", subObj.superVal);
