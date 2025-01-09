const name = "siddharth"
const age = 20

console.log("my" + "name is ",name +"age is ",age );    //outdated syntax


//new syntax

console.log(`ny name is ${name} and my age is ${age}`);      //new syntax


const myname = new String("siddharth")
console.log(myname);

console.log(myname[0]);  //to access the element at 0th position

console.log(myname.__proto__);  //to access objects of string

console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.charAt(4));  //to know the character at given location
console.log(myname.indexOf('t'))

/*  methods of string

anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt:ƒ charAt()
charCodeAt:ƒ charCodeAt()
codePointAt:ƒ codePointAt()
concat:ƒ concat()
constructor:ƒ String()
endsWith:ƒ endsWith()
fixed:ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize:ƒ fontsize()
includes:ƒ includes()
indexOf:ƒ indexOf()
isWellFormed:ƒ isWellFormed()
italics:ƒ italics()
lastIndexOf:ƒ lastIndexOf()
length:0
link:ƒ link()
localeCompare:ƒ localeCompare()
match:ƒ match()
matchAll:ƒ matchAll()
normalize:ƒ normalize()
padEnd:ƒ padEnd()
padStart:ƒ padStart()
repeat:ƒ repeat()
replace:ƒ replace()
replaceAll:ƒ replaceAll()
search:ƒ search()
slice:ƒ slice()
small:ƒ small()
split:ƒ split()
startsWith:ƒ startsWith()
strike:ƒ strike()
sub:ƒ sub()
length:0
name:"sub"
arguments:(...)
substr:ƒ substr()
substring:ƒ substring()
sup:ƒ sup()
toLocaleLowerCase:ƒ toLocaleLowerCase()
toLocaleUpperCase:ƒ toLocaleUpperCase()
toLowerCase:ƒ toLowerCase()
toString:ƒ toString()
toUpperCase:ƒ toUpperCase()
toWellFormed:ƒ toWellFormed()
trim:ƒ trim()
trimEnd:ƒ trimEnd()
trimLeft:ƒ trimStart()
trimRight:ƒ trimEnd()
trimStart:ƒ trimStart()
valueOf:ƒ valueOf()
*/


const newString = myname.substring(0, 4)
console.log(newString);

const anotherString = myname.slice(-8, 4)
console.log(anotherString);

anotherString1 = "    siddharth"
console.log(anotherString1);
console.log(anotherString1.trim());

const url = "https://siddharth.com/sidd..tajane"
console.log(url.replace('sidd.','siddharth'));
console.log(url.includes('https'));

myname1 = "sidd harth "
console.log(myname1.split(" "));

