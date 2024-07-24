// falsy values: false , 0 , -0, BigInt->0n , "" , null , undefined , NaN

// truthy values: true , "0" , "false" , 'false' ," " , [] , {} ,function(){}

// Nullish Coalescing operator (??):null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null??20??30

console.log(val1);

// Ternary operator
//condition ? true value1 : false value2
const fruit = "apple"
fruit=="apple"?console.log("yes"):console.log("no");