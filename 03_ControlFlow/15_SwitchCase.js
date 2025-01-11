const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case");
        break;
}



//truthy values

const useremail = "sidd@gmail.com"
if(useremail){
    console.log("got user email");
}
else{
    console.log("dont got email");
}



const useremail1 = ""
if(useremail1){
    console.log("got user email");
}
else{
    console.log("dont got email");
}




const useremail2 = []
if(useremail2){
    console.log("got user email");
}
else{
    console.log("dont got email");
}


//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// other than above values all values are true

// truthy values
// "0", 'false'/"false", " ", [], {}, function(){}


// to check the array length
if (useremail1.length === 0) {
    console.log("array is empty");
    
}



// to check the object empty or not
const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
    
}




//nullish coalescing operator(??): null and undefined
let val;
val = 5 ?? 10
val = null ?? 10
val = undefined ?? 10

console.log(val);




// terniary operator
// condition ? true : false

const teaprice = 100
teaprice <= 80 ? console.log("less than 80") : console.log("more than 80");

