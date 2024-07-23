const myArray = [10 , 23, 26, 30 , "Archana"]
console.log(myArray)

let myArray2 = new Array("cake" , "coke" , "car" , "cola")
console.log(myArray2[3])

// Array Methods 
myArray.push("apple")
myArray.push(19)
myArray.pop()
console.log(myArray.shift())
console.log(myArray.unshift(5))
console.log(myArray)

// slice--> doesnot manipulate original array, splice--> manipulate original array

console.log("A" , myArray)
let newArray = myArray.slice(1,4)
console.log("B" , newArray)
console.log(myArray)

let newArray2 = myArray.splice(1,2)
console.log("C" , newArray2)
console.log(myArray) // Array is modified




