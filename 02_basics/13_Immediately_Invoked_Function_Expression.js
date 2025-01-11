function one(){
    console.log(`DB conncted`);
    
}
one();

//IIFE syntax , use and example
//    (function definiton)()
// used to avoid global scope polution  vaiables
// ex
(function chai(){
    // it is a named IIFE
    console.log(`DB conncted`);
})();
//you have to add ";" at the end of IIFE function to end it otherwise it will not stop its work

(() => {
    console.log(`DB conncted`);
})();


((name) => {
    console.log(`DB conncted ${name}`);
})('sidd');