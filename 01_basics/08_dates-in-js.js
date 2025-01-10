//dates

let mydate = new Date()  //instance or object of date
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(typeof mydate);


let mycreatedDate = new Date(2025, 0, 11)
console.log(mycreatedDate);
console.log(mycreatedDate.toDateString());

let mycreatedDate1 = new Date(2025, 0, 11, 10, 65)
console.log(mycreatedDate1.toLocaleString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getDay())




newDate.toLocaleString('default',{
    weekday: "long"
})


