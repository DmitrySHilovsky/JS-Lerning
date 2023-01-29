import checkResult from "./check-result";

checkResult(2, 6, "*", 12);
checkResult(2, 6, "*", 10);
checkResult(10, 0, "/", Infinity);
console.log(typeof(Infinity));