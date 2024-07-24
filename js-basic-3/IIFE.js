//IIFE-> immediately invoked function expression
// IIFE is used to avoid the problem occured due to pollution of global scope
// it is used when the fucntion is needed to be executed immediately 

(function print()
{
    console.log("Hello world")
})();
// If we are using multiple iife functions then semi-colon should be added at end of the previous function otherwise fuction's context end cannot be defined
(function print2()
{
    console.log("Hello everyone")
})();

// Arrow fuction can also be used
(()=>{
    console.log("arrow function evoked")
})();

//where to pass argument / parameter
((name)=>{
console.log(`Name: ${name}`)

})("Archana")
