function calculateCartPrice(...num1)
{
   return num1
}

// console.log(calculateCartPrice(200))

// console.log(calculateCartPrice(200,300,400))  // it will only print the first value where parameter is passed num1 so we will use the rest operator (...)

console.log(calculateCartPrice(234,282,555))

// Functions with objects
user={
    username:"Archana",
    age:22
}
//the below of passing the objects require correct spellings to use otherwise it will return undefined
function userInfo(anyobject)
{
   console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
}

userInfo(user)
// Another way of declaring
userInfo({
    username: "Alex",
    age:23
})

//functions with array
const myArray = [20,30,40,50]

function returnThirdValue(anyarray)
{
  console.log(`Second Value of array is ${anyarray[2]}`)
}

returnThirdValue(myArray)



