//if
//if(condition){}
//if condition is true then the if block will work
//if condition is false then the if block will not work
//conditions can be <, >, <=, >=, ==, !=, ===
//(=== checks the tyeof of two values)

const temp = 42
if (temp > 40){
    console.log("temp is greater than 40");
    
}

//else
const temp1 = 39
if (temp1 > 40){
    console.log("temp is greater than 40");   
}
else{
    console.log("temp is not greater than 40");  
}


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power ${power}`);
    
}//console.log(`user power ${power}`);
//outside console.log will not be executed due to the scope of "power"


const balance = 1000
if(balance > 500) console.log("done");


if(balance < 200){
     console.log("less than");
}
else if (balance < 750){
    console.log("less than 750");
}
else if(balance < 999){
    console.log("less than 999");
}
else{
    console.log("greater than 999");
}



const userLoggedIn = true
const debitcard = true
const cash = false
if (userLoggedIn && debitcard && cash) {
    console.log("allowed for buying");
}
else{
    console.log("not alloewd");
    
}


const googleLoggedIn = false
const emailLoggedIn = true

if (userLoggedIn || debitcard ) {
    console.log("allowed for buying");
}
else{
    console.log("not alloewd");
    
}