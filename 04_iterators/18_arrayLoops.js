// for of loop
const arr = [1, 2, 3, 4, 5, 6, 7, "sidd"]

for (const i of arr) {
    console.log(i);
    
}

const greeting = "hello world"
for (const j of greeting) {
    console.log(`each char is ${j}`);
    // if (j == "o") {
    //      break;
    // }
}


// maps

const map = new Map()
map.set('IN', "india")
map.set('EUR', "europe")
map.set('Fr', "France")
map.set('IN', "india")
console.log(map);

for (const k of map) {
    console.log(k);
    
}

for (const [k, v] of map) {
    console.log(k, v);
    
}

/*
const myobj = {
    'game1' : "NFS",
    'game2' : "SPM"
}
for (const [a, b] of myobj) {
    console.log(a, b);
    
}
// the above syntax is mot used to iterate the object
*/


// forin loop
const myobj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myobj) {
    console.log(key);
    
}

for (const key in myobj) {
    // console.log(myobj[key]);
    console.log(`${key} is shortcut for ${myobj}`);
 
}


const arr1 = ["js", "ruby", "cpp"]
for (const key in arr1) {
   console.log(key);
   
}


const arr2 = ["js", "ruby", "cpp"]
for (const key in arr2) {
   console.log(arr1[key]);
   
}


// foreach loop

const code = ["js", "ruby", "cpp", "python"]
code.forEach( function (item){
// callback function. it is required for foreach loop and it does not have function name
console.log(item);

} )

console.log("*************************");


code.forEach( (item) => {console.log(item);} )

console.log("*************************");

function printMe(item){
    console.log(item);
}
code.forEach(printMe)

console.log("*************************");


code.forEach( (item, index, arr) => {console.log(item, index, arr);} )


console.log("*************************");

const mycode = [
    {
        langname : "javascript",
        langfile : "js"
    },
    {
        langname : "java",
        langfile : "jav"
    },
    {
        langname : "ruby",
        langfile : "rb"
    },
    {
        langname : "python",
        langfile : "py"
    }
]
mycode.forEach( (item) => {console.log(item.langname);
})