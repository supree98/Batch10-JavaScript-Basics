console.log("named functions");
function getData(a, b) {
    console.log(a);
    console.log(b);
    console.log("inside the named function");
    return a + b;   
}
console.log(getData(10,20));

console.log("-------------------");

console.log("functions expression");
var greeting = function (name) {
    console.log(name);
    console.log("good afternoon");
    return "BYE";
};
console.log(greeting);
var resp = greeting("ABC");
console.log(resp);

console.log("--------------------");

console.log("IIFE");
(function (name) {
    console.log(name);
    console.log("configuring");
})("Supreeth");

console.log("---------------------");

console.log("Arrow ");
var x = (name, age) => {
    console.log("this is arrow function...");
    return name;
}
var resm = x("supreeth", 31);
console.log(resm);