function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 500, 300));



const user = {
    name : "sid",
    price : 199
}
function handleanyobject(anyobject) {
      console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleanyobject(user)
handleanyobject({
    name : "sam",
    price : 299
})



const newarray = [200, 100, 300, 400]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(newarray));
