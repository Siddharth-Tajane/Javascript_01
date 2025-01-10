const name1 = ["ABC", "DEF", "GHI", "JKL", "MNO"]
const name2 = ["PQR", "STU", "VWX", "YZA"]

// name1.push(name2)
// console.log(name1);
console.log(typeof name1); // array is an object

// const name3 = name1.concat(name2)
// console.log(name3);   concat not used so much

const name4 = [...name1,...name2]
console.log(name4);

const name5 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
name6 = name5.flat(Infinity)
console.log(name6);


console.log(Array.isArray("siddharth"));
console.log(Array.from("siddharth"));
console.log(Array.from({name: "siddharth"})); //cant convert directly into an array


let score1 = 100
let score2 = 300
let score3 = 200

console.log(Array.of(score1, score2,score3));
