// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("5 is best");
        
    }
    console.log(element); 

}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} and inner loop is ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
        
    }

}



const myarray = ["flash", "batman", "superman"]
for (let k = 0; k < myarray.length; k++) {
    const element = myarray[k];
    console.log(element);
}



// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 detected");
        break;
    }
    console.log(`value of i is ${index}`);

    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 detected");
        continue;
    }
    console.log(`value of i is ${index}`);

    
}
