// arrays
// written in square brackets
// you can use elements of different datatypes in single array

const myArray = [ 1, 2, 3, 4, 5, 6,]
// console.log(myArray);
// console.log(myArray[1]);

const newArr = new Array(1, 2, 3, 4, 5)
// console.log(newArr);


//methods of array


myArray.push(7, 8)
// console.log(myArray);

myArray.pop()  //removes last element of the array
// console.log(myArray);

myArray.unshift(0)  //adds element at the starting
// console.log(myArray);

myArray.shift()  //removes added element at the starting by using unshift
// console.log(myArray);

// console.log(myArray.includes(1)); // checking the value exists in array or not


const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof newArray); //array converted into string


//slice and splice

console.log("A ",myArray);
const mn1 = myArray.slice(1, 4) //does not manipulate the original array
console.log(mn1);


console.log("B ",myArray);
const mn2 = myArray.splice(1, 4) // manipulates the original array
console.log(mn2);