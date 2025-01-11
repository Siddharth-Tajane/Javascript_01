const user = {
    username: "sidd",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);

    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


console.log(this); // in node environment 'this' refers to the empty object




function one(){

    console.log(this);

}
    
one()
//'this' is only accessible within object


const one1 = function (){
    let username = "sidd"
    console.log(this.username);

}
    
one1()


//Arrow function
const one2 = () => {
    let username = "sidd"
    console.log(this);
    console.log(this.username);
}
    
one2()



//basic syntax of arrow function
//         () => {}

const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3, 4));
//above example is an explicit rreturn as it contains curly braces and return statement


const add1 = (num1, num2) =>  num1 + num2

console.log(add1(3, 4));

//above example is of implicit return as it does not contains the return statement


const add2 = () => ({username1: "sid"})
console.log(add2());
//you have to encode the object in the round brackets 
//direct curley braces does not except the values it will show undefined output