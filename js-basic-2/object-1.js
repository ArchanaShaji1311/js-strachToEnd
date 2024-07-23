// singleton
//object.create

//using symbol in object
const mySym = Symbol("key1")


// object literals 
const jsUser = {
    name : "Archana",
    // mySym:"symKey",
    [mySym] : "symkey",
    age : 21,
    branch:'cs',
    isHired : true
}

console.log(jsUser["name"])
console.log(jsUser.age)
console.log(jsUser)
console.log(typeof jsUser[mySym])
console.log(jsUser[mySym])

jsUser.name = "Arch"
console.log(jsUser)

// we can stop any changes to apply on the object using freeze function

Object.freeze(jsUser)
jsUser.branch = 'IT'
console.log(jsUser) //no changes were applied

jsUser.greeting = function()
{
    console.log("Hello there!")
}
console.log(jsUser.greeting())

jsUser.greeting2 = function(){
    console.log(`hello there ${this.name}`)
}
console.log(jsUser.greeting2())