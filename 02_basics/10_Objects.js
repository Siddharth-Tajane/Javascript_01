//objects literals(not singleton)
//there are keys and value pairs in object

const JsUser = {
    name: "siddharth", //key is considered as string and value can ge aything like array or another objects separeted by commas
    age: 20,
    location:"Akole",
    "full name": "siddharth tajane"

}   //creation of the object


//to acces objects

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]); //cant be accessed by . oprator


//symbol declaration and access
const mysymbol = Symbol("key1")
const JsUser2 = {
    name: "sidd",
    [mysymbol]: "MyKey1",
    location: "Akole"
}

console.log(JsUser2[mysymbol]);
console.log(typeof JsUser2[mysymbol]);


JsUser2.location = "Sangamner"
console.log(JsUser2["location"]); //syntax to change the values of key within the object
JsUser2.location = "Akole"
console.log(JsUser2["location"]);

// Object.freeze(JsUser2)
JsUser2.location = "sangamner"
console.log(JsUser2["location"]);


console.log(JsUser2);




JsUser2.greeting = function(){
    console.log("hello user");
    
}
console.log(JsUser2.greeting);
console.log(JsUser2.greeting());


JsUser2.greeting2 = function(){
    console.log(`hello user, ${this.name}`);
    
}
console.log(JsUser2.greeting);
console.log(JsUser2.greeting2());





//while accessing the values from object you will use mostly '.' operator minimum cases you will use square brackets