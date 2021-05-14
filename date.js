var date = new Date();

console.log("--------getFullYear-----------");
console.log(date.getFullYear(date));
console.log("--------getHours-----------");
console.log(date.getHours(date));
console.log("--------getMinutes-----------");
console.log(date.getMinutes(date));
console.log("--------getMonth-----------");
console.log(date.getMonth(date));
console.log("--------getTime-----------");
console.log(date.getTime(date));
console.log("--------getDate-----------");
console.log(date.getDate(date));
console.log("--------getDay-----------");
console.log(date.getDay(date));
console.log("--------getMilliseconds-----------");
console.log(date.getMilliseconds(date));

console.log("------------examples-------------");
var d1 = new Date();
var d2 = new Date();

d2.setFullYear(2022);

console.log("validating");
console.log(d1.getFullYear());
console.log(d2.getFullYear());
console.log(d2.getFullYear()- d1.getFullYear());

