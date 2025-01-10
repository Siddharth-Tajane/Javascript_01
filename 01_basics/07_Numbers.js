const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);  //convert number into string and writes the length of string
console.log(balance.toFixed(3));  //gives a fixed decimal number

const othernum = 123.632
console.log(othernum.toPrecision(3));

const hundreds = 100000000000
console.log(hundreds.toLocaleString()); //simplify value according to th us standards 
console.log(hundreds.toLocaleString('en-IN')); //simplify value according to th indian standards 


/******************Maths************************/

console.log(Math);
console.log(Math.abs(-4));  //convert -ve into +ve only
console.log(Math.round(4.6));  
console.log(Math.ceil(4.9));  
console.log(Math.floor(4.6));  
console.log(Math.min(4, 3, 6, 7));  
console.log(Math.max(4, 3, 6, 7));  
console.log(Math.random());  