function repeatAfter()
{
    console.log("A")
    console.log("R")
    console.log("C")
    console.log("H")
    console.log("A")
    console.log("N")
    console.log("A")
}

repeatAfter()

function addTwoNumbers(num1 , num2)
{
    console.log(num1+num2)
}
addTwoNumbers(4,5)
//-> The result below was undefined because the function does not return anything only printing the result in console
const result = addTwoNumbers(6,8)
console.log("Result:" , result)

function addTwoNumbers(num1 , num2)
{
    // let result = num1+ num2
    // return result
    return num1 + num2
}

const result1 = addTwoNumbers(9,8)
console.log(result1)

function userLoggedIn(username)
{
    return `${username} has logged in`
}
console.log(userLoggedIn("Archana")) //function returned successfully

//what if we dont pass any arguments
console.log(userLoggedIn()) //undefined will be returned 

//lets apply an conditional check
function userLoggedIn(username)
{
    if(username===undefined)
    {
        console.log(`Please enter a username`)
        return
    }

    if(!username)
    {
        console.log("enter a username")
        return
    }

    return `${username} has logged in`
}

console.log(userLoggedIn())

// let pass a default value if argument is not passed
function userLoggedIn(username="Alex")
{
    return `${username} has logged in`
}
console.log(userLoggedIn())