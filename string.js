var str = "hello world";
var str2 = new String("hello world");

console.log("==");
console.log(str == str2);
console.log("===");
console.log(str === str2);
console.log("---------------------------------");

var str3 = new String("hii");
var str4 = new String("hii");

console.log("==");
console.log(str3 == str4);
console.log("===");
console.log(str3 === str4);

console.log("------------------------------------");
var str5 = "welcome to techno elevate , welcome again";
console.log("----------indexOf----------");
var num1 = str5.indexOf("welcome");
console.log(num1);
console.log("-----------lastIndexOf----------");
var num2 = str5.lastIndexOf("welcome");
console.log(num2);
console.log("---------search----------");
var num3 = str5.search("to");
console.log(num3);

console.log("---------------------------------");
console.log("slice");
var res1 = str5.slice(8,10);
console.log(res1);
console.log("substring");
var res2 = str5.substring(8,10);
console.log(res2);
console.log("substr");
var res3 = str5.substr(8,2);
console.log(res3);
