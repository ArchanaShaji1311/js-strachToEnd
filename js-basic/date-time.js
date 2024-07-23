// Dates
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let createdDate = new Date(2023 ,10 ,13)
// console.log(createdDate.toDateString())

// let createdDate = new Date("2024-11-13")
// console.log(createdDate.toDateString())

let createdDate = new Date("07-23-2024")
// console.log(createdDate.toDateString())

// let createdDate = new Date(2024 , 10 , 13 , 10 , 0)
// console.log(createdDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(createdDate.getTime())
console.log(Math.floor(myTimeStamp/1000))
// in this way above time in converted to seconds
