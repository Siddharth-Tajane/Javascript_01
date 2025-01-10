function saymyName(){
    console.log("S");
    console.log("i");
    console.log("d");
    console.log("d");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("h");

} //function declaration

saymyName()   //function execution


function addtwonum(num1, num2){
    console.log(num1 + num2);
}
addtwonum(3, 4)
addtwonum(3, "2")
addtwonum(3, "a")
addtwonum(3, null)

const result = addtwonum(3, 5)  //will give output as 8 according to function written above
console.log("result is ",result); //will show result is undefined


function addtwonum(num1, num2){
    let result1 = num1 + num2 
    return result1 //after return statement the function will not run or work hence return statement should be written at last of function
}

const result1 = addtwonum(3, 9)  
console.log("result is ",result1); 



function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
     return `${username} just logged in `
}
console.log(loginUserMessage("siddharth"))
console.log(loginUserMessage())


function loginUserMessage1(username){
    
     return `${username} just logged in `
}

console.log(loginUserMessage1())



function loginUserMessage2(username = "sid"){
    if(!username){
        console.log("please enter a username");
        return
    }
     return `${username} just logged in `
}
console.log(loginUserMessage2())