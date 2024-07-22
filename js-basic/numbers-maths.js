// const score = 400
// console.log(score)

// const balance = new Number(200)
// console.log(balance)

// let newBalance = balance.toString();
// console.log(typeof newBalance)

// let newNum = 1234567;
// console.log(newNum.toLocaleString())
// console.log(newNum.toLocaleString('en-IN'))

// let deciNum = 7685.75
// console.log(deciNum.toPrecision(4))

//-----------------Maths-------------------------
// console.log(Math)
// console.log(Math.round(789.6))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.2))
// console.log(Math.sqrt(144))

// Most imp function is random
console.log(Math.random())  // --> it will always give a value between 0 and 1
console.log(Math.random() * 10) //--> but what if the number is of form 0.004456 then multiplying 10 will not have any impact

console.log((Math.random() * 10) + 1)  //--> what i want an integer number

console.log(Math.floor(Math.random() * 10) + 1)
// what if i want a random number between certain range like 10 to 20

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


