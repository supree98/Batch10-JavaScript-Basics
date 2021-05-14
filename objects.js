var person = {
    uname : "Messi",
    age : 32,
    height : "5.7 ft",
    gender : "male",
    color : "white", 
    hobbies : ["play", "read", "cook"],
    isMarried : true,
    address : {
        houseNo : 5,
        street : "barcelona",
        city : "spain",
    },
            
    eating:function() {
        console.log(this.uname+" is eating");
    },

    sleeping : function() {
        console.log(this.uname+" is sleeping");
    }
}

console.log(person["uname"]);
console.log(person["age"])
console.log(person["height"]);
console.log(person["gender"]);
console.log(person["color"]);
console.log(person["isMarried"]);
