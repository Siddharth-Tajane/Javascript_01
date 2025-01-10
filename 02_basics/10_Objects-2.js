//singleton objects

//const user = new Object() //singleton object
const user = {}  //non singleton object

user.id = "123abc"
user.name = "sam"
user.isLoggedIn = false

// console.log(user);


const user1 = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            name: "sidd",
            middlename: "sunil",
            lastname: "tajane"
        }
    },
    location: {
        address: {
            streetname: "abc",
            colonyname: "ABC",
            roadname: "aBc"
        }
    }
}

console.log(user1.fullname);
console.log(user1.fullname.userfullname.name);