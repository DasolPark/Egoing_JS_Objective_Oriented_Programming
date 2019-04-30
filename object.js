var memberArray = ["david", "judy", "selena"];
console.log("memberArray[1]", memberArray[1]);

var memberObject = {
  manager: "david",
  developer: "judy",
  designer: "selena"
};

console.log("memberObject.manager", memberObject.manager);
console.log("memberObject['developer']", memberObject["developer"]);
console.log("memberObject['designer']", memberObject["designer"]);
memberObject.designer = "peter";
console.log("after update memberObject.designer", memberObject.designer);
delete memberObject.designer;
console.log("after delete memberObject.designer", memberObject.designer);
